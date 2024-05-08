import express from "express";
import { get_page , login_check , signup, submit_page2 , submit_page1 , submit_page3 , submit_page4 , submit_page5, submit_page6 , submit_page7 , submit_page8,submit_page9} from "./database.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});

// Route for /api/login endpoint
app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        // Call the login_check function with the provided email and password
        const result = await login_check(email, password);

        // Assuming result contains the count_matching value
        const count_matching = result[0].count_matching;

        // Check if there is a matching user
        if (count_matching === 1) {
            res.status(200).json({ message: "Login successful" });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
app.post("/api/signup", async (req, res) => {
    const { firstName, lastName, email, category, password } = req.body;

    try {
        // Basic validation
        if (!firstName || !lastName || !email || !category || !password) {
            return res.status(400).json({ message: "Please fill in all fields" });
        }

        // Call the signup function with provided user data
        const result = await signup(firstName, lastName, email, category, password);

        if (result.success) {
            res.status(200).json({ message: "Signup successful" });
        } else {
            res.status(400).json({ message: result.message || "Signup failed" });
        }
    } catch (error) {
        console.error("Error during signup:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});


app.post("/api/submit_page1", async (req, res) => {
    const { email, DOA,  post_applied, personal_details, Mobile, alternate_mobile, alternate_email, landline_no, correspondence_address, permanent_address } = req.body;
    
    try {
        // Basic validation
        // Call the signup function with provided user data
        const result = await submit_page1(email, DOA,  post_applied, personal_details, Mobile, alternate_mobile, alternate_email, landline_no, correspondence_address, permanent_address);


        if (result.success) {
            res.status(200).json({ message: "Submit successful" });
        } else {
            res.status(400).json({ message: result.message || "Submit failed" });
        }
    } catch (error) {
        console.error("Error during submit:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke 💩");
});

app.post("/api/submit_page2", async (req, res) => {
    const { email,educationQualification , academicDetailsMtech, academicDetailsBtech , school , extra } = req.body;

    try {
        // Basic validation
        

        // Call the signup function with provided user data
        const result = await submit_page2(email,educationQualification , academicDetailsMtech, academicDetailsBtech , school , extra );

        if (result.success) {
            res.status(200).json({ message: "Submit successful" });
        } else {
            res.status(400).json({ message: result.message || "Submit failed" });
        }
    } catch (error) {
        console.error("Error during submit:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
app.post("/api/submit_page3", async (req, res) => {
    const { email,present_positions ,empol_table , teach_table , research_table , industrial_table , area_spec, area_research } = req.body;

    try {
        // Basic validation
        

        // Call the signup function with provided user data
        const result = await submit_page3(email,present_positions ,empol_table , teach_table , research_table , industrial_table , area_spec, area_research  );

        if (result.success) {
            res.status(200).json({ message: "Submit successful" });
        } else {
            res.status(400).json({ message: result.message || "Submit failed" });
        }
    } catch (error) {
        console.error("Error during submit:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
app.post("/api/submit_page4", async (req, res) => {
    const { email,summary , publi_table , patent_table , book_table , book_chapters_table , google_scholar_link } = req.body;

    try {
        // Basic validation
        

        // Call the signup function with provided user data
        const result = await submit_page4(email,summary , publi_table , patent_table , book_table , book_chapters_table , google_scholar_link );

        if (result.success) {
            res.status(200).json({ message: "Submit successful" });
        } else {
            res.status(400).json({ message: result.message || "Submit failed" });
        }
    } catch (error) {
        console.error("Error during submit:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.post("/api/submit_page5", async (req, res) => {
    const { email,member_table , training_table , award_table , spons_table , consu_table } = req.body;

    try {
        // Basic validation
        

        // Call the signup function with provided user data
        const result = await submit_page5(email,member_table , training_table , award_table , spons_table , consu_table );

        if (result.success) {
            res.status(200).json({ message: "Submit successful" });
        } else {
            res.status(400).json({ message: result.message || "Submit failed" });
        }
    } catch (error) {
        console.error("Error during submit:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
app.post("/api/submit_page6", async (req, res) => {
    const { email,theis_table, mtech_table , btech_table } = req.body;

    try {
        // Basic validation
        

        // Call the signup function with provided user data
        const result = await submit_page6(email,theis_table, mtech_table , btech_table );

        if (result.success) {
            res.status(200).json({ message: "Submit successful" });
        } else {
            res.status(400).json({ message: result.message || "Submit failed" });
        }
    } catch (error) {
        console.error("Error during submit:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.post("/api/submit_page7", async (req, res) => {
    const { email,research , course , other , editor , journal , conference } = req.body;

    try {
        // Basic validation
        

        // Call the signup function with provided user data
        const result = await submit_page7(email,research , course , other , editor , journal , conference );

        if (result.success) {
            res.status(200).json({ message: "Submit successful" });
        } else {
            res.status(400).json({ message: result.message || "Submit failed" });
        }
    } catch (error) {
        console.error("Error during submit:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
app.post("/api/submit_page8", async (req, res) => {
    const { email,refer} = req.body;

    try {
        // Basic validation
        

        // Call the signup function with provided user data
        const result = await submit_page8(email,refer);

        if (result.success) {
            res.status(200).json({ message: "Submit successful" });
        } else {
            res.status(400).json({ message: result.message || "Submit failed" });
        }
    } catch (error) {
        console.error("Error during submit:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
app.post("/api/submit_page9", async (req, res) => {
    const { email,consent , declared } = req.body;
    try {
        // Basic validation
        

        // Call the signup function with provided user data
        const result = await submit_page9(email,consent,declared);

        if (result.success) {
            res.status(200).json({ message: "Submit successful" });
        } else {
            res.status(400).json({ message: result.message || "Submit failed" });
        }
    } catch (error) {
        console.error("Error during submit:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.get("/api/get/:query/:email", async (req, res) => {
	const query = req.params.query;
	const email = req.params.email;
	const result = await get_page(email, query);
	res.status(200).send(result);
})