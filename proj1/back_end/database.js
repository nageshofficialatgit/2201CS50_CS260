import mysql from "mysql2";

const pool = mysql
  .createPool({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "2582004",
    database: "kitkat_take_a_break",
  })
  .promise();
console.log("Connection Succesful");

export async function getQuery(querystring) {
  const [result] = await pool.query(querystring);
  return result;
}

export async function login_check(email, pass) {
  // Using parameterized queries to safely interpolate user inputs
  // Executing the parameterized query with provided email and password
  const [data] = await pool.query(
    `SELECT COUNT(*) AS count_matching
	FROM users
	WHERE email = ? AND password = ?`,
    [email, pass]
  );
  console.log(data);
  return data;
}

export async function signup(firstName, lastName, email, category, password) {
  try {
      // Insert the new user into the 'users' table
      const insertQuery = `
          INSERT INTO users (email, password, first_name, last_name, category)
          VALUES (?, ?,? , ?, ?)`;

      const getQuery = `
          SELECT email from users
          WHERE email = ?`;

      // Execute the query with the provided parameters
      await pool.query(insertQuery, [email, password, firstName, lastName, category]);
      const [ rows ] = await pool.query(getQuery, [email]);

      if (rows.length === 1) {
          // Return the inserted user's id and email if successful
          return {
              success: true,
              id: rows[0].id,
              email: rows[0].email
          };
      } else {
          return {
              success: false,
              message: "User insertion failed."
          };
      }
  } catch (error) {
      console.error("Error in signup:", error);
      return {
          success: false,
          message: "Failed to signup. Please try again later."
      };
  }
}

export async function submit_page1(email, DOA, post_applied, personal_details, Mobile, alternate_mobile, alternate_email, landline_no, correspondence_address, permanent_address)
{
    try {
        // Insert the new user into the 'users' table
        const insertQuery = `
        INSERT INTO kitkat_take_a_break.page_1
        (email,
        DOA,
        post_applied,
        personal_details,
        Mobile,
        alternate_mobile,
        alternate_email,
        landline_no,
        correspondence_address,
        permanent_address)
        VALUES
        (? , ? , ? , ? , ? , ? , ? , ? , ? , ? )
        ON DUPLICATE KEY UPDATE 
        email=? ,
        DOA = ? ,
        post_applied=? ,
        personal_details=? ,
        Mobile=? ,
        alternate_mobile=? ,
        alternate_email=? ,
        landline_no=? ,
        correspondence_address=? ,
        permanent_address=? 
        `;
      
       
  
        // const getQuery = `
        //     SELECT email from page_2
        //     WHERE email = ?`;
  
        // Execute the query with the provided parameters
        await  pool.query(insertQuery,
            [email,
            DOA,
            post_applied,
            JSON.stringify(personal_details),
            Mobile,
            alternate_mobile,
            alternate_email,
            landline_no,
            JSON.stringify(correspondence_address),
            JSON.stringify(permanent_address) ,
            email,
            DOA,
            post_applied,
            JSON.stringify(personal_details),
            Mobile,
            alternate_mobile,
            alternate_email,
            landline_no,
            JSON.stringify(correspondence_address),
            JSON.stringify(permanent_address)
        
        ]
            );
        //const [ rows ] = await pool.query(getQuery, [email]);
  
        return {success : true }
    } catch (error) {
        console.error("Error in signup:", error);
        return {success : false}
    }
  }

  export async function submit_page2(email, educationQualification, academicDetailsMtech, academicDetailBtech, school, extra) {
    try {
        // Insert the new user into the 'page_2' table
        const insertQuery = `
        INSERT INTO kitkat_take_a_break.page_2
        (email, educational_qualifications, acadmic_details_m_tech, academic_details_b_tech, acadmic_details_school, additional_edu)
        VALUES (?, ?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE 
        email = ?, educational_qualifications = ?, acadmic_details_m_tech = ?, academic_details_b_tech = ?, acadmic_details_school = ?, additional_edu  = ?
        `;

        // Execute the query with the provided parameters
        await pool.query(insertQuery, [
            email,
            JSON.stringify(educationQualification),
            JSON.stringify(academicDetailsMtech),
            JSON.stringify(academicDetailBtech),
            JSON.stringify(school),
            JSON.stringify(extra) ,
            email,
            JSON.stringify(educationQualification),
            JSON.stringify(academicDetailsMtech),
            JSON.stringify(academicDetailBtech),
            JSON.stringify(school),
            JSON.stringify(extra)
        ]);

        return { success: true };
    } catch (error) {
        console.error("Error in submit_page2:", error);
        return { success: false, error: error.message };
    }
}

export async function submit_page3(email,present_positions ,empol_table , teach_table , research_table , industrial_table , area_spec, area_research ) {
    try {
        // Insert the new user into the 'page_2' table
        const insertQuery = `
        INSERT INTO kitkat_take_a_break.page_3
        (
            email,
present_employment,
employ_history,
teach_exp,
research_exp,
industrial_exp,
area_spec,
curr_research
        )
        VALUES (?, ?, ?, ?, ?, ?,?,? )
        ON DUPLICATE KEY UPDATE 
        email =? ,
        present_employment =? ,
        employ_history =? ,
        teach_exp =? ,
        research_exp =? ,
        industrial_exp =? ,
        area_spec =? ,
        curr_research =? 
        
        `;

        // Execute the query with the provided parameters
        await pool.query(insertQuery, [
            email,
            JSON.stringify(present_positions),
            JSON.stringify(empol_table),
            JSON.stringify(teach_table),
            JSON.stringify(research_table),
            JSON.stringify(industrial_table),
            area_spec,
            area_research ,
            email,
            JSON.stringify(present_positions),
            JSON.stringify(empol_table),
            JSON.stringify(teach_table),
            JSON.stringify(research_table),
            JSON.stringify(industrial_table),
            area_spec,
            area_research
        ]);

        return { success: true };
    } catch (error) {
        console.error("Error in submit_page3:", error);
        return { success: false, error: error.message };
    }
}

export async function submit_page4(email,summary , publi_table , patent_table , book_table , book_chapters_table , google_scholar )
{
    try {
        // Insert the new user into the 'page_2' table
        const insertQuery = `
        INSERT INTO kitkat_take_a_break.page_4
        (
            email,
summary_publication,
best_publication,
patent,
book,
book_chapter,
scholar_link
        )
        VALUES (?, ?, ?, ?, ?, ?,?)
        ON DUPLICATE KEY UPDATE 
        email = ? ,
        summary_publication = ? ,
        best_publication = ? ,
        patent = ? ,
        book = ? ,
        book_chapter = ? ,
        scholar_link  = ? 
        
        `;

        // Execute the query with the provided parameters
        await pool.query(insertQuery, [
            email,
            JSON.stringify(summary),
            JSON.stringify(publi_table),
            JSON.stringify(patent_table),
            JSON.stringify(book_table),
            JSON.stringify(book_chapters_table),
            google_scholar ,
            email,
            JSON.stringify(summary),
            JSON.stringify(publi_table),
            JSON.stringify(patent_table),
            JSON.stringify(book_table),
            JSON.stringify(book_chapters_table),
            google_scholar
        ]);

        return { success: true };
    } catch (error) {
        console.error("Error in submit_page4:", error);
        return { success: false, error: error.message };
    }
}

export async function submit_page5(email,member_table , training_table , award_table , spons_table , consu_table )
{
    try {
        // Insert the new user into the 'page_2' table
        const insertQuery = `
        INSERT INTO kitkat_take_a_break.page_5
        (
            email,
            membership,
            training,
            award,
            spon_project,
            cons_project
        )
        VALUES (?, ?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE 

        email = ? ,
        membership = ? ,
        training = ? ,
        award = ? ,
        spon_project = ? ,
        cons_project  = ? 

        `;

        // Execute the query with the provided parameters
        await pool.query(insertQuery, [
            email,
            JSON.stringify(member_table),
            JSON.stringify(training_table),
            JSON.stringify(award_table),
            JSON.stringify(spons_table),
            JSON.stringify(consu_table),
            email,
            JSON.stringify(member_table),
            JSON.stringify(training_table),
            JSON.stringify(award_table),
            JSON.stringify(spons_table),
            JSON.stringify(consu_table),
           
        ]);

        return { success: true };
    } catch (error) {
        console.error("Error in submit_page5:", error);
        return { success: false, error: error.message };
    }
}



export async function submit_page6(email,theis_table, mtech_table , btech_table  )
{
    try {
        // Insert the new user into the 'page_2' table
        const insertQuery = `
        INSERT INTO kitkat_take_a_break.page_6
        (
            email,
thesis,
mtech,
btech
        )
        VALUES (?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE 
        email = ? , 
        thesis = ? , 
        mtech = ? , 
        btech  = ? 
        
        `;

        // Execute the query with the provided parameters
        await pool.query(insertQuery, [
            email,
            JSON.stringify(theis_table),
            JSON.stringify(mtech_table),
            JSON.stringify(btech_table),
            email,
            JSON.stringify(theis_table),
            JSON.stringify(mtech_table),
            JSON.stringify(btech_table),
           
           
        ]);

        return { success: true };
    } catch (error) {
        console.error("Error in submit_page6:", error);
        return { success: false, error: error.message };
    }
}

export async function submit_page7(email,research , course , other , editor , journal , conference   )
{
    try {
        // Insert the new user into the 'page_2' table
        const insertQuery = `
        INSERT INTO kitkat_take_a_break.page_7
        (email,
        research,
        course,
        other,
        edtor,
        journal,
        conference
          
        )
         VALUES (?, ?, ?, ?,?,?,?)
         ON DUPLICATE KEY UPDATE 
         email =? ,
        research =? ,
        course =? ,
        other =? ,
        edtor =? ,
        journal =? ,
        conference  =? 
         `;

        // Execute the query with the provided parameters
        await pool.query(insertQuery, [
            email,
            research,
            course,
            other,
            editor,
            journal,
            conference ,
            email,
            research,
            course,
            other,
            editor,
            journal,
            conference
           
           
        ]);

        return { success: true };
    } catch (error) {
        console.error("Error in submit_page7:", error);
        return { success: false, error: error.message };
    }
}
export async function submit_page8(email,refer )
{
    try {
        // Insert the new user into the 'page_2' table
        const insertQuery = `
        INSERT INTO kitkat_take_a_break.page_8
        (email,
          referral
          
        )
         VALUES (?, ?) 
         ON DUPLICATE KEY UPDATE 
         email = ? ,
          referral  = ? 
         `;

        // Execute the query with the provided parameters
        await pool.query(insertQuery, [
            email,
           JSON.stringify(refer) ,
           email,
           JSON.stringify(refer)
           
           
        ]);

        return { success: true };
    } catch (error) {
        console.error("Error in submit_page8:", error);
        return { success: false, error: error.message };
    }
}
export async function submit_page9(email,consent,declared )
{
    try {
        // Insert the new user into the 'page_2' table
        const insertQuery = `
        INSERT INTO kitkat_take_a_break.page_9
        (email,
          consent,
          declared
          
        )
         VALUES (?, ? ,?) 
         ON DUPLICATE KEY UPDATE 
         email = ? ,
          consent = ? ,
          declared  = ? 
         
       `;

      // Execute the query with the provided parameters
        await pool.query(insertQuery, [
            email,
           consent,
           declared ,
           email,
           consent,
           declared
           
           
        ]);

        return { success: true };
    } catch (error) {
        console.error("Error in submit_page9:", error);
        return { success: false, error: error.message };
    }
}

export async function get_page(email, table) {
	const querystring = `
		SELECT * FROM ${table} WHERE email=?
	`;
	const querystring2 = `
		SELECT First_Name, Last_Name FROM users WHERE email=?
	`;
	var result = [];
	
	result.push((await pool.query(querystring, [email]))[0][0]);
	result.push((await pool.query(querystring2, [email]))[0][0]);
	return result;
}

export async function get_pdf_info(email) {
	var querystring = `SELECT * FROM (SELECT p.*, u.date_of_application, u.application_id, u.category FROM page_1 as p, user as u WHERE u.email = p.email) as x NATURAL JOIN page_2 NATURAL JOIN page_3 NATURAL JOIN page_4 NATURAL JOIN page_5 NATURAL JOIN page_6 NATURAL JOIN page_7 NATURAL JOIN page_8 WHERE email=?`;
	const [result] = await pool.query(querystring, [email]);
	return result;
}