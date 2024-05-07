//1.Create a your resume data in JSON format
const My_Resume = 
{
    "contact_details" : {
        "name" : "VIBHOOSHANA S",
        "email": "Vibhooshanasenthilkumar@gmail.com",
        "phone_number": "6738479030",
        "linkedin_profile": "https://www.linkedin.com/in/vibhooshana-senthilkumar-a245b61b2/",
        "github_profile": "https://github.com/Vibhooshana12",
        "location" : {
            "address" :"16,Sayapattarai street,Tirupur",
            "city": "Tiruppur",
            "state": "Tamilnadu",
            "country": "India",
            "pincode": 641601
        },
    },
        "objective" : "An student looking to land on challenging platform to explore my strengths and potentials. Also to gain experience from proffessional organization.",
        "education" : [
            {
                "degree" : "Bachelor of Engineering",
                "department":"Electrical and Electronics Engineering",
                "institution" : "Bannari Amman Institute of Technology",
                "year_of_passing": 2023
            }
        ],
        "internship_details" : [
            {
            "sector" : "Infrastructure Application Service", 
            "company_name":"Aspire Systems",
            "duration" : "Jan 2023 - Mar 2023",
            "location" : "Chennai",
            "responsibilites": [
                "Developed a Medical Shop Management Application using python,mysql...",
                "Learned about AWS cloud platform..."
            ]
        }
        ],
        "skills" : {
            "technical" : ["Python","C","MySql","HTML/CSS","JavaScript"],
            "language_known":["English","Tamil","Telugu"],
            "soft_skill":["Problem Solving","Communication"]
        },
        "projects":[
            {
            "title" : "Medical Shop Management System",
            "tools_technologies" : ["Python","MySql","Github","VsCode","MySql Workbench"],
            "outcome": "A application to manage the medicine details like stocks,dosage,price..."
            },
            {
            "title" : "IoT enabled smart energy management system...",
            "tools_technologies" :["Proteus","Javascript","HTML/CSS","Sensors"],
            "outcome":"Focus on lowering electricity bills by utilizing solar energy generated from the solar panels using IoT and Embedded System..."
            }
        ],
        "areas_of_interest": ["Power Electronics","IoT","C","Python","HTML/CSS/JAVASCRIPT"],
        "hobbies":{
              "indoor" : ["Sketching","Craft making"],
              "extracurricular" : ["Handball","Throwball","Athletics"]
            }
        }

//2. for the above Json, iterate over all for loops(for,for in,for of, forEach)

//a.for loop - Using a for loop to iterate over the "internship_details" array
console.log("a.Iterating over the internship_details array for loop:")
const internship_details =My_Resume.internship_details;
for(var i = 0;i<internship_details.length;i++)
    {    
        console.log("1.Sector:",internship_details[i].sector)
        console.log("2.Company Name",internship_details[i].company_name)
        console.log("3.Duration",internship_details[i].duration)
        console.log("4.Location",internship_details[i].location)
        console.log("5.responsibilites",internship_details[i].responsibilites[i])
    }
console.log("************************************************")



//b.for...in loop - printing contact details
//for...in- it iterates over properties of an object,it works on keys of the object
console.log("b.Iterating over Contact details using for...in loop:")
var res = My_Resume.contact_details;
for(let key in res)
    console.log(key,": ",res[key])
console.log("************************************************")



//c.forEach - printing the technical skills
//forEach - always works only with arrays,it executes callback function for each element in an array
console.log("c.Iterating array of technical skills using forEach:")
var res = My_Resume.skills.technical
res.forEach((ele) => console.log(ele))
console.log("************************************************")




//d.for...of - printing the array of extracurricular using for...of loop
//for...of - Iterating over the values of an iterable object (arrays, strings, etc.)
console.log("d.Iterating through array of extracurricular using for..of loop:")
var res = My_Resume.hobbies.extracurricular
for(var i of res){
    console.log(i);
}





//b.for...in loop - printing educational details
//for...in -it iterates over an object
// console.log("b.Iterating over education details object using for...in loop")
// for(let i in My_Resume.education)
//     {
//         console.log(My_Resume.education[i])
//         //console.log(`Education details: ${JSON.stringify(My_Resume.education[i])}`)
//     }

