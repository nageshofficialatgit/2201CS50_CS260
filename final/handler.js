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
    const personal_details = [
        document.getElementById("firstName").value,
      document.getElementById("middleName").value,
        document.getElementById("lastName").value,
      document.getElementById("nationality").value,
        document.getElementById("dob").value,
       document.getElementById("gender").value,
         document.getElementById("maritalStatus").value,
       document.getElementById("category").value,
        document.getElementById("idProofType").value,
         document.getElementById("fatherName").value
    ]
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
async function get_page1() {
   
    try {
        const response = await fetch("http://localhost:8080/api/get/page_1/"+ localStorage.getItem("email") , {
            method: "GET",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
            },
           
        });

        const data = await response.json();
        console.log(data); // Log the response data received from the server

        // Assuming the server returns a message indicating the signup status
        document.getElementById("dateOfApplication").value = data[0].DOA.substring(0,10)
         document.getElementById("applicationNumber").value =data[0].APP_NO
        document.getElementById("postApplied").value = data[0].post_applied
   
            document.getElementById("firstName").value = data[0].personal_details[0]
            document.getElementById("middleName").value = data[0].personal_details[1]
            document.getElementById("lastName").value = data[0].personal_details[2]
            document.getElementById("nationality").value = data[0].personal_details[3]
            document.getElementById("dob").value = data[0].personal_details[4]
            document.getElementById("gender").value = data[0].personal_details[5]
            document.getElementById("maritalStatus").value = data[0].personal_details[6]
            document.getElementById("category").value = data[0].personal_details[7]
            document.getElementById("idProofType").value = data[0].personal_details[8]
            document.getElementById("fatherName").value = data[0].personal_details[9]
        
        document.getElementById("mobileNumber").value  = data[0].Mobile
         document.getElementById("alternateMobileNumber").value = data[0].alternate_mobile 
         document.getElementById("alternateEmail").value  = data[0].alternate_email
         document.getElementById("landlineNumber").value = data[0].landline_no
        
            document.getElementById("correspondenceStreet").value = data[0].correspondence_address[0]
            document.getElementById("correspondenceCity").value = data[0].correspondence_address[1]
            document.getElementById("correspondenceDistrict").value = data[0].correspondence_address[2]
            document.getElementById("correspondenceState").value = data[0].correspondence_address[3]
            document.getElementById("correspondenceCountry").value = data[0].correspondence_address[4]
        
            document.getElementById("permanentStreet").value =  data[0].permanent_address[0]
            document.getElementById("permanentCity").value =  data[0].permanent_address[1]
            document.getElementById("permanentDistrict").value =  data[0].permanent_address[2]
            document.getElementById("permanentState").value =  data[0].permanent_address[3]
            document.getElementById("permanentCountry").value =  data[0].permanent_address[4]
        
            document.getElementsByClassName("welcome-name")[0].innerHTML = "Welcome : " + data[1].First_Name + " " + data[1].Last_Name;
            document.getElementById("username").innerHTML =   data[1].First_Name + " " + data[1].Last_Name;
    
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

    document.getElementsByClassName("welcome-name")[0].innerHTML = "Welcome : " + data[1].First_Name + " " + data[1].Last_Name;
   
}
    // do validaton here  
    catch (error) {
        console.error("Error:", error);
       
    }

}
async function get_page3() {
    

    try {
        const response = await fetch("http://localhost:8080/api/get/page_3/"+ localStorage.getItem("email") , {
            method: "GET",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
            },
            
        });

        const data = await response.json();
            
        
        document.getElementById("present_position").value = data[0].present_employment[0]
            document.getElementById("present_organization").value = data[0].present_employment[1]
            document.getElementById("present_status").value = data[0].present_employment[2]
            document.getElementById("present_join_date").value = data[0].present_employment[3]
            document.getElementById("present_leave_date").value = data[0].present_employment[4]
            document.getElementById("present_duration").value = data[0].present_employment[5]
        
    
            document.getElementById("areas-of-specialization").value  = data[0].area_spec
            document.getElementById("current-area-of-research").value = data[0].curr_research
        
        
        setTableData(document.getElementsByTagName('table')[0], data[0].employ_history);
         setTableData(document.getElementsByTagName('table')[1], data[0].teach_exp);
       setTableData(document.getElementsByTagName('table')[2], data[0].research_exp);
       setTableData(document.getElementsByTagName('table')[3], data[0].industrial_exp);
      
       document.getElementsByClassName("welcome-name")[0].innerHTML = "Welcome : " + data[1].First_Name + " " + data[1].Last_Name;
      
    
        // Assuming the server returns a message indicating the signup status
        
    }
    
    // do validaton here  
    catch (error) {
        console.error("Error:", error);
       
    }
    
}

async function get_page4() {
   
   

    try {
        const response = await fetch("http://localhost:8080/api/get/page_4/"+ localStorage.getItem("email") , {
            method: "GET",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
            },
            
        });

        const data = await response.json();
       // console.log(data); // Log the response data received from the server
       
         document.getElementById("intl_journal_papers").value = data[0].summary_publication[0]
       document.getElementById("natl_journal_papers").value = data[0].summary_publication[1]
       document.getElementById("intl_conf_papers").value = data[0].summary_publication[2]
       document.getElementById("natl_conf_papers").value = data[0].summary_publication[3]
       document.getElementById("patents").value = data[0].summary_publication[4]
       document.getElementById("books").value = data[0].summary_publication[5]
       document.getElementById("book_chapters").value = data[0].summary_publication[5]
          
       
   
      
       
       
       
       
      setTableData(document.getElementsByTagName('table')[0], data[0].best_publication);
         setTableData(document.getElementsByTagName('table')[1], data[0].patent);
                 setTableData(document.getElementsByTagName('table')[2], data[0].book);
      setTableData(document.getElementsByTagName('table')[3], data[0].book_chapter);
        document.getElementById("google_scholar_link").value   = data[0].scholar_link

        document.getElementsByClassName("welcome-name")[0].innerHTML = "Welcome : " + data[1].First_Name + " " + data[1].Last_Name;
    }
    // do validaton here  
    catch (error) {
        console.error("Error:", error);
       
    }
    
}
async function get_page5() {
    

   
   

    try {
        const response = await fetch("http://localhost:8080/api/get/page_5/"+ localStorage.getItem("email") , {
            method: "GET",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
            },
            
        });

        const data = await response.json();
       // console.log(data); // Log the response data received from the server
       
       
       
       
       
         setTableData(document.getElementsByTagName('table')[0], data[0].membership);
       setTableData(document.getElementsByTagName('table')[1], data[0].training);
        setTableData(document.getElementsByTagName('table')[2], data[0].award);
         setTableData(document.getElementsByTagName('table')[3], data[0].spon_project);
        setTableData(document.getElementsByTagName('table')[4], data[0].cons_project);
        document.getElementsByClassName("welcome-name")[0].innerHTML = "Welcome : " + data[1].First_Name + " " + data[1].Last_Name;
    }
    
    // do validaton here  
    catch (error) {
        console.error("Error:", error);
       
    }
    
}
async function get_page6() {
    

   
    
    
   
   

    try {
        const response = await fetch("http://localhost:8080/api/get/page_6/"+ localStorage.getItem("email") , {
            method: "GET",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
            },
            
        });

        const data = await response.json();
        //console.log(data); // Log the response data received from the server
       
        // Assuming the server returns a message indicating the signup status
         
    setTableData(document.getElementsByTagName('table')[0], data[0].thesis);
  setTableData(document.getElementsByTagName('table')[1], data[0].mtech);
     setTableData(document.getElementsByTagName('table')[2], data[0].btech);
     document.getElementsByClassName("welcome-name")[0].innerHTML = "Welcome : " + data[1].First_Name + " " + data[1].Last_Name;
        
    }
    
    // do validaton here  
    catch (error) {
        console.error("Error:", error);
       
    }
    
}
async function get_page7() {
   
   

    try {
        const response = await fetch("http://localhost:8080/api/get/page_7/"+ localStorage.getItem("email") , {
            method: "GET",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
            },
          
        });

        const data = await response.json();
       // console.log(data); // Log the response data received from the server
        
        // Assuming the server returns a message indicating the signup status
         document.getElementById("special_research").value   = data[0].research
         document.getElementById("t2").value  = data[0].course
          document.getElementById("t3").value  = data[0].other
         document.getElementById("t4").value  = data[0].edtor
          document.getElementById("t5").value  = data[0].journal
        document.getElementById("t6").value  = data[0].conference
        document.getElementsByClassName("welcome-name")[0].innerHTML = "Welcome : " + data[1].First_Name + " " + data[1].Last_Name;
        
    }
    
    // do validaton here  
    catch (error) {
        console.error("Error:", error);
       
    }
    
}
async function get_page8() {
   
   

    try {
        const response = await fetch("http://localhost:8080/api/get/page_8/"+ localStorage.getItem("email") , {
            method: "GET",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
            },
            
        });

        const data = await response.json();
      //  console.log(data); // Log the response data received from the server
        
        // Assuming the server returns a message indicating the signup status
       
        setTableData(document.getElementsByTagName('table')[0], data[0].referral);
        document.getElementsByClassName("welcome-name")[0].innerHTML = "Welcome : " + data[1].First_Name + " " + data[1].Last_Name;
    }
    
    // do validaton here  
    catch (error) {
        console.error("Error:", error);
       
    }
    
}
async function get_page10() {
   
    console.log("nasa")

    try {
        const response = await fetch("/get/get_pdf_info/"+ localStorage.getItem("email") , {
            method: "GET",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
            },
            
        });

        const data = await response.json();
        console.log(data) ;
      //  console.log(data); // Log the response data received from the server
    document.getElementById("page_1tag1").innerHTML = data[0].personal_details[0]
        // Assuming the server returns a message indicating the signup status
       
      
    }
    
    // do validaton here  
    catch (error) {
        console.error("Error:", error);
       
    }
    
}

if(window.location.href.includes( "page1" )){ get_page1() }
if(window.location.href.includes( "page2" )){ get_page2() }
if(window.location.href.includes( "page3" )){ get_page3() }
if(window.location.href.includes( "page4" )){ get_page4() }
if(window.location.href.includes( "page5" )){ get_page5() }
if(window.location.href.includes( "page6" )){ get_page6() }
if(window.location.href.includes( "page7" )){ get_page7() }
if(window.location.href.includes( "page8" )){ get_page8() }
if(window.location.href.includes( "page0" )){get_page10()}