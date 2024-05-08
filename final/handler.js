function tableToJson(table) {
    const rows = table.rows;
        var table_data = [];
        for (var i = 1; i < rows.length; i++) {
            var row = rows[i].cells;
            var row_data = [];
            for (var j = 0; j < row.length; j++) {
                row_data.push(row[j].children[0].value);
            }
            table_data.push(row_data);
        }
        return table_data;
}
function log_out(){
    localStorage.removeItem('email');
    window.location.href="./index.html";
}
function setTableData(table, data) {
    const rows = table.rows;
    for (var i = 1; i < rows.length; i++) {
        var row = rows[i].cells;
        var row_data = data[i - 1];
        for (var j = 0; j < row.length; j++) {
            row[j].children[0].value = row_data[j];
        }
    }
}

async function submit_page1() {
    const DOA = document.getElementById("dateOfApplication").value
    const APP_NO = document.getElementById("applicationNumber").value
    const post_applied = document.getElementById("postApplied").value
    const personal_details = {
        firstName: document.getElementById("firstName").value,
        middleName: document.getElementById("middleName").value,
        lastName: document.getElementById("lastName").value,
        nationality: document.getElementById("nationality").value,
        dob: document.getElementById("dob").value,
        gender: document.getElementById("gender").value,
        maritalStatus: document.getElementById("maritalStatus").value,
        category: document.getElementById("category").value,
        idProofType: document.getElementById("idProofType").value,
        fatherName: document.getElementById("fatherName").value
    }
    const Mobile = document.getElementById("mobileNumber").value
    const alternate_mobile = document.getElementById("alternateMobileNumber").value
    const alternate_email = document.getElementById("alternateEmail").value
    const landline_no = document.getElementById("landlineNumber").value
    const correspondence_address = [
        document.getElementById("correspondenceStreet").value,
        document.getElementById("correspondenceCity").value,
        document.getElementById("correspondenceDistrict").value,
        document.getElementById("correspondenceState").value,
        document.getElementById("correspondenceCountry").value
    ]
    const permanent_address = [
        document.getElementById("permanentStreet").value,
        document.getElementById("permanentCity").value,
        document.getElementById("permanentDistrict").value,
        document.getElementById("permanentState").value,
        document.getElementById("permanentCountry").value
    ]
    if (!Mobile) {
        alert("Please fill in all required(*)fields");
        return;
    }
    try {
        const response = await fetch("http://localhost:8080/api/submit_page1", {
            method: "POST",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: localStorage.getItem("email"),
                DOA: DOA,
               
                post_applied: post_applied,
                personal_details: personal_details,
                Mobile: Mobile,
                alternate_mobile: alternate_mobile,
                alternate_email: alternate_email,
                landline_no: landline_no,
                correspondence_address: correspondence_address,
                permanent_address: permanent_address
            }),
        });

        const data = await response.json();
       // console.log(data); // Log the response data received from the server

        // Assuming the server returns a message indicating the signup status
        if(response.status==200){window.location.href="./page2.html" 
    }
}
    
    // do validaton here  
    catch (error) {
        console.error("Error:", error);
       
    }
    
}
async function submit_page2() {
    const edu_qua =[ document.getElementById("uni").value, 
    document.getElementById("dept").value, 
    document.getElementById("supervisor").value,
    document.getElementById("join_year").value,
    document.getElementById("theis").value,
    document.getElementById("award").value,
    document.getElementById("thesis_title").value,

    ]
    const acd_detail_mtech =[ document.getElementById("pg_degree").value,
    document.getElementById("pg_uni").value,
    document.getElementById("pg_branch").value,
    document.getElementById("pg_join_year").value,
    document.getElementById("pg_completion_year").value,
    document.getElementById("pg_duration").value,
    document.getElementById("pg_percentage").value,
    document.getElementById("pg_division").value,
    ]
    const acd_detail_btech =[ document.getElementById("ug_degree").value,
    document.getElementById("ug_uni").value,
    document.getElementById("ug_branch").value,
    document.getElementById("ug_join_year").value,
    document.getElementById("ug_completion_year").value,
    document.getElementById("ug_duration").value,
    document.getElementById("ug_percentage").value,
    document.getElementById("ug_division").value,

    ]
    const acad_school = document.getElementById("acad_school")
    const extra_edu = document.getElementById("extra_edu")
    const school = tableToJson(acad_school) ;
    const extra = tableToJson(extra_edu) ;

    try {
        const response = await fetch("http://localhost:8080/api/submit_page2", {
            method: "POST",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: localStorage.getItem("email"),
                educationQualification: edu_qua,
                academicDetailsMtech: acd_detail_mtech,
                academicDetailsBtech: acd_detail_btech ,
                school : school ,
                extra : extra
              
            }),
        });

        const data = await response.json();
        //console.log(data); // Log the response data received from the server
        if(response.status==200){window.location.href="./page3.html" 
    }
        // Assuming the server returns a message indicating the signup status
        
    }
    
    // do validaton here  
    catch (error) {
        console.error("Error:", error);
       
    }
    
}
async function submit_page3() {
    const pre_employ = [
        document.getElementById("present_position").value,
        document.getElementById("present_organization").value,
        document.getElementById("present_status").value,
        document.getElementById("present_join_date").value,
        document.getElementById("present_leave_date").value,
        document.getElementById("present_duration").value,
    ]

    const empol = document.getElementById("table1")
    const teach = document.getElementById("teaching_experience_table")
    const research = document.getElementById("research_experience_table")
    const industrial = document.getElementById("industrial_experience_table")
    
    
    
    
    const empol_table = tableToJson(empol) ;
    const teach_table = tableToJson(teach) ;
    const research_table = tableToJson(research) ;
    const industrial_table = tableToJson(industrial) ;
    const area_spec = document.getElementById("areas-of-specialization").value
    const area_research = document.getElementById("current-area-of-research").value


    try {
        const response = await fetch("http://localhost:8080/api/submit_page3", {
            method: "POST",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: localStorage.getItem("email"),
                present_positions: pre_employ,
                empol_table : empol_table,
                teach_table : teach_table,
                research_table : research_table,
                industrial_table : industrial_table,
                area_spec : area_spec,
                area_research:area_research


              
            }),
        });

        const data = await response.json();
        console.log(data); // Log the response data received from the server
        if(response.status==200){window.location.href="./page4.html" 
    }
        // Assuming the server returns a message indicating the signup status
        
    }
    
    // do validaton here  
    catch (error) {
        console.error("Error:", error);
       
    }
    
}

async function submit_page4() {
    const summary = [  document.getElementById("intl_journal_papers").value,
    document.getElementById("natl_journal_papers").value,
    document.getElementById("intl_conf_papers").value,
    document.getElementById("natl_conf_papers").value,
    document.getElementById("patents").value,
    document.getElementById("books").value,
    document.getElementById("book_chapters").value,
       
    ]

    const publi = document.getElementById("t1")
    const patent = document.getElementById("t2")
    const book = document.getElementById("t3")
    const book_chapters = document.getElementById("t4")
    
    
    
    
    const publi_table = tableToJson(publi) ;
    const patent_table = tableToJson(patent) ;
    const book_table = tableToJson(book) ;
    const book_chapters_table = tableToJson(book_chapters) ;
    const scholar_link = document.getElementById("google_scholar_link").value
   

    try {
        const response = await fetch("http://localhost:8080/api/submit_page4", {
            method: "POST",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: localStorage.getItem("email"),
               summary : summary,
               publi_table:publi_table,
               patent_table:patent_table,
               book_table:book_table,
               book_chapters_table:book_chapters_table,
               google_scholar_link:scholar_link
               


              
            }),
        });

        const data = await response.json();
       // console.log(data); // Log the response data received from the server
        if(response.status==200){window.location.href="./page5.html" 
    }
        // Assuming the server returns a message indicating the signup status
        
    }
    
    // do validaton here  
    catch (error) {
        console.error("Error:", error);
       
    }
    
}
async function submit_page5() {
    

    const member = document.getElementById("t1")
    const training = document.getElementById("t2")
    const award = document.getElementById("t3")
    const spons = document.getElementById("t4")
    const consu = document.getElementById("t5")
    
    
    
    
    const member_table = tableToJson(member) ;
    const training_table = tableToJson(training) ;
    const award_table = tableToJson(award) ;
    const spons_table = tableToJson(spons) ;
    const consu_table = tableToJson(consu) ;
   

    try {
        const response = await fetch("http://localhost:8080/api/submit_page5", {
            method: "POST",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: localStorage.getItem("email"),
               member_table:member_table,
               training_table:training_table,
               award_table:award_table,
               spons_table:spons_table,
               consu_table:consu_table

               


              
            }),
        });

        const data = await response.json();
       // console.log(data); // Log the response data received from the server
        if(response.status==200){window.location.href="./page6.html" 
    }
        // Assuming the server returns a message indicating the signup status
        
    }
    
    // do validaton here  
    catch (error) {
        console.error("Error:", error);
       
    }
    
}
async function submit_page6() {
    

    const theis = document.getElementById("t1")
    const mtech = document.getElementById("t2")
    const btech = document.getElementById("t3")
    
    
    
    
    const theis_table = tableToJson(theis) ;
    const mtech_table = tableToJson(mtech) ;
    const btech_table = tableToJson(btech) ;
    
   

    try {
        const response = await fetch("http://localhost:8080/api/submit_page6", {
            method: "POST",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: localStorage.getItem("email"),
              theis_table:theis_table ,
              mtech_table:mtech_table , 
              btech_table:btech_table
               


              
            }),
        });

        const data = await response.json();
        //console.log(data); // Log the response data received from the server
        if(response.status==200){window.location.href="./page7.html" 
    }
        // Assuming the server returns a message indicating the signup status
        
    }
    
    // do validaton here  
    catch (error) {
        console.error("Error:", error);
       
    }
    
}
async function submit_page7() {
    const research =  document.getElementById("special_research").value
    const course =  document.getElementById("t2").value
    const other =  document.getElementById("t3").value
    const editor =  document.getElementById("t4").value
    const journal =  document.getElementById("t5").value
    const conf =  document.getElementById("t6").value

   

    try {
        const response = await fetch("http://localhost:8080/api/submit_page7", {
            method: "POST",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: localStorage.getItem("email"),
              research:research,
              course:course,
              other:other ,
              editor:editor,
              journal:journal,
              conference:conf
               


              
            }),
        });

        const data = await response.json();
       // console.log(data); // Log the response data received from the server
        if(response.status==200){window.location.href="./page8.html" 
    }
        // Assuming the server returns a message indicating the signup status
        
    }
    
    // do validaton here  
    catch (error) {
        console.error("Error:", error);
       
    }
    
}
async function submit_page8() {
    const refer = document.getElementById("t1")
    const refer_table = tableToJson(refer) ;

   

    try {
        const response = await fetch("http://localhost:8080/api/submit_page8", {
            method: "POST",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: localStorage.getItem("email"),
              refer : refer_table
               


              
            }),
        });

        const data = await response.json();
      //  console.log(data); // Log the response data received from the server
        if(response.status==200){window.location.href="./page9.html" 
    }
        // Assuming the server returns a message indicating the signup status
        
    }
    
    // do validaton here  
    catch (error) {
        console.error("Error:", error);
       
    }
    
}
async function submit_page9() {
         const consent =  document.getElementById("checkID").value
         const declare =  document.getElementById("t2").value

    try {
        const response = await fetch("http://localhost:8080/api/submit_page9", {
            method: "POST",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: localStorage.getItem("email"),
             consent : consent,
             declared:declare
               


              
            }),
        });

        const data = await response.json();
       // console.log(data); // Log the response data received from the server
        if(response.status==200){window.location.href="./index.html" 
    }
        // Assuming the server returns a message indicating the signup status
        
    }
    
    // do validaton here  
    catch (error) {
        console.error("Error:", error);
       
    }
    
}

async function get_page2(){
    try {
        const response = await fetch("http://localhost:8080/api/get/page_2/"+ localStorage.getItem("email") , {
            method: "GET",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
            },
          
        });

        const data = await response.json();
        console.log(data); // Log the response data received from the server
        
  
        // Assuming the server returns a message indicating the signup status
        
    
 document.getElementById("uni").value = data[0].educational_qualifications[0]
    document.getElementById("dept").value = data[0].educational_qualifications[1]
    document.getElementById("supervisor").value = data[0].educational_qualifications[2]
    document.getElementById("join_year").value = data[0].educational_qualifications[3]
    document.getElementById("theis").value = data[0].educational_qualifications[4]
    document.getElementById("award").value = data[0].educational_qualifications[5]
    document.getElementById("thesis_title").value  = data[0].educational_qualifications[6]

    
     document.getElementById("pg_degree").value = data[0].acadmic_details_m_tech[0]
    document.getElementById("pg_uni").value = data[0].acadmic_details_m_tech[1]
    document.getElementById("pg_branch").value = data[0].acadmic_details_m_tech[2]
    document.getElementById("pg_join_year").value = data[0].acadmic_details_m_tech[3]
    document.getElementById("pg_completion_year").value = data[0].acadmic_details_m_tech[4]
    document.getElementById("pg_duration").value = data[0].acadmic_details_m_tech[5]
    document.getElementById("pg_percentage").value = data[0].acadmic_details_m_tech[6]
    document.getElementById("pg_division").value = data[0].acadmic_details_m_tech[7]
    
     document.getElementById("ug_degree").value = data[0].academic_details_b_tech[0]
    document.getElementById("ug_uni").value = data[0].academic_details_b_tech[1]
    document.getElementById("ug_branch").value = data[0].academic_details_b_tech[2]
    document.getElementById("ug_join_year").value = data[0].academic_details_b_tech[3]
    document.getElementById("ug_completion_year").value = data[0].academic_details_b_tech[4]
    document.getElementById("ug_duration").value = data[0].academic_details_b_tech[5]
    document.getElementById("ug_percentage").value = data[0].academic_details_b_tech[6]
    document.getElementById("ug_division").value = data[0].academic_details_b_tech[7]

    
    setTableData(document.getElementsByTagName('table')[0], data[0].acadmic_details_school);
    setTableData(document.getElementsByTagName('table')[1], data[0].additional_edu);


   
}
    // do validaton here  
    catch (error) {
        console.error("Error:", error);
       
    }

}
if(window.location.href.includes( "page2" )){ get_page2() }