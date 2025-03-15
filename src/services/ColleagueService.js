import {IsEmpty} from "../../client/src/utility/ValidationHelper.js";
import db from "../db/connectionDB.js";


export const ColleagueService = async (req) => {
    try {
        const { name, position, company_id, department_id } = req.body;
        if (IsEmpty(req.body)) return { status: false, message: "Please enter all required fields" };


        const [result] = await db.execute(
            "INSERT INTO colleague(name, position, company_id, department_id) VALUES (?, ?, ?, ?);",
            [name, position, company_id, department_id]
        );

        return { status: true, Colleague: result };
    } catch (error) {
        return { status: false, message: error.toString() };
    }
};



export const SearchService = async (req) => {
    try {
        const { keyword } = req.params;
        const {company, department, position} = req.query;
        if (!keyword) return { status: false, message: "Please enter a search keyword." };

        // SQL query with filters
        const [result] = await db.execute(
            `SELECT
                 colleague.id AS colleague_id,
                colleague.name AS colleague_name,
                colleague.position,
                company.name AS company_name,
                department.departmentName AS department_name
            FROM colleague
            LEFT JOIN company ON colleague.company_id = company.id
            LEFT JOIN department ON colleague.department_id = department.id
            WHERE 
                (colleague.name LIKE ? OR colleague.position LIKE ?)
                AND (company.name = ? OR ? = '')
                AND (department.departmentName = ? OR ? = '')
                AND (colleague.position = ? OR ? = '') LIMIT 1;`,
            [`%${keyword}%`, `%${keyword}%`, company || '', company || '', department || '', department || '', position || '', position || '']
        );

        if (result.length === 0) return { status: false, message: "No matching results found." };

        return { status: true, search: result };
    }
    catch (error) {
        return { status: false, message: error.toString() };
    }
};
