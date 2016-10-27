
import { normalize, Schema, arrayOf } from 'normalizr';


let original_data = {
     departments: [
                      {
                        id: 1,
                        name: "Department A",
                        employees:[
                          { id: 1, name: 'Alice', gender: 'F' },
                          { id: 2, name: 'Bob', gender: 'M' },
                          { id: 3, name: 'Calvin', gender: 'M' }
                        ]
                      },
                      {
                        id: 2,
                        name: "Department B",
                        employees:[
                          { id: 4, name: 'Diana', gender: 'F' },
                          { id: 5, name: 'Eric', gender: 'M' },
                          { id: 6, name: 'Gab', gender: 'M' }
                        ]
                      },
                      {
                        id: 3,
                        name: "Department C",
                        employees:[
                          { id: 1, name: 'Alice', gender: 'F' },
                          { id: 4, name: 'Diana', gender: 'F' },
                          { id: 7, name: 'Heller', gender: 'M' },
                          { id: 8, name: 'Ivy', gender: 'M' },
                          { id: 6, name: 'Gab', gender: 'M' }
                        ]
                      }
                  ]
};


let departmentSchema = new Schema('departments');
let employeeSchema = new Schema('employees');

departmentSchema.define({
      employees: arrayOf(employeeSchema)

});


let NormalizeExample = React.createClass({
	render: function() {
		return (<button type="button" className="btn btn-primary" onClick = { 
            function() { 

                let result = normalize(original_data, { departments: arrayOf(departmentSchema) });
                console.log(result);
                alert(JSON.stringify(result, null, 2));
            } 
        }>Test</button>);
	}
});




let normalizr_data = [
{
  "type": "desc",
  "title": "normalizr",
  "url": "https://www.npmjs.com/package/normalizr",
  "text": "Normalizes JSON according to schema for Redux and Flux applications\r\n\r\nNormalizes deeply nested JSON API responses according to a schema for Flux and Redux apps.\r\nKudos to Jing Chen for suggesting this approach."
},<NormalizeExample / >,
{
  "language": "jsx",
  "type": "source",
  "title": "Sample",
  "code": "import { normalize, Schema, arrayOf } from 'normalizr';\r\n\r\n\r\nlet original_data = {\r\n     departments: [\r\n                      {\r\n                        id: 1,\r\n                        name: \"Department A\",\r\n                        employees:[\r\n                          { id: 1, name: 'Alice', gender: 'F' },\r\n                          { id: 2, name: 'Bob', gender: 'M' },\r\n                          { id: 3, name: 'Calvin', gender: 'M' }\r\n                        ]\r\n                      },\r\n                      {\r\n                        id: 2,\r\n                        name: \"Department B\",\r\n                        employees:[\r\n                          { id: 4, name: 'Diana', gender: 'F' },\r\n                          { id: 5, name: 'Eric', gender: 'M' },\r\n                          { id: 6, name: 'Gab', gender: 'M' }\r\n                        ]\r\n                      },\r\n                      {\r\n                        id: 3,\r\n                        name: \"Department C\",\r\n                        employees:[\r\n                          { id: 1, name: 'Alice', gender: 'F' },\r\n                          { id: 4, name: 'Diana', gender: 'F' },\r\n                          { id: 7, name: 'Heller', gender: 'M' },\r\n                          { id: 8, name: 'Ivy', gender: 'M' },\r\n                          { id: 6, name: 'Gab', gender: 'M' }\r\n                        ]\r\n                      }\r\n                  ]\r\n};\r\n\r\n\r\nlet departmentSchema = new Schema('departments');\r\nlet employeeSchema = new Schema('employees');\r\n\r\ndepartmentSchema.define({\r\n      employees: arrayOf(employeeSchema)\r\n\r\n});\r\n\r\n\r\nlet NormalizeExample = React.createClass({\r\n\trender: function() {\r\n\t\treturn (<button type=\"button\" className=\"btn btn-primary\" onClick = { \r\n            function() { \r\n\r\n                let result = normalize(original_data, { departments: arrayOf(departmentSchema) });\r\n                console.log(result);\r\n                alert(JSON.stringify(result, null, 2));\r\n            } \r\n        }>Test</button>);\r\n\t}\r\n});\r\n\r\n"
},
{
  "language": "json",
  "type": "source",
  "title": "It will return the following result:",
  "code": "{\r\n  \"entities\": {\r\n    \"departments\": {\r\n      \"1\": {\r\n        \"id\": 1,\r\n        \"name\": \"Department A\",\r\n        \"employees\": [\r\n          1,\r\n          2,\r\n          3\r\n        ]\r\n      },\r\n      \"2\": {\r\n        \"id\": 2,\r\n        \"name\": \"Department B\",\r\n        \"employees\": [\r\n          4,\r\n          5,\r\n          6\r\n        ]\r\n      },\r\n      \"3\": {\r\n        \"id\": 3,\r\n        \"name\": \"Department C\",\r\n        \"employees\": [\r\n          1,\r\n          4,\r\n          7,\r\n          8,\r\n          6\r\n        ]\r\n      }\r\n    },\r\n    \"employees\": {\r\n      \"1\": {\r\n        \"id\": 1,\r\n        \"name\": \"Alice\",\r\n        \"gender\": \"F\"\r\n      },\r\n      \"2\": {\r\n        \"id\": 2,\r\n        \"name\": \"Bob\",\r\n        \"gender\": \"M\"\r\n      },\r\n      \"3\": {\r\n        \"id\": 3,\r\n        \"name\": \"Calvin\",\r\n        \"gender\": \"M\"\r\n      },\r\n      \"4\": {\r\n        \"id\": 4,\r\n        \"name\": \"Diana\",\r\n        \"gender\": \"F\"\r\n      },\r\n      \"5\": {\r\n        \"id\": 5,\r\n        \"name\": \"Eric\",\r\n        \"gender\": \"M\"\r\n      },\r\n      \"6\": {\r\n        \"id\": 6,\r\n        \"name\": \"Gab\",\r\n        \"gender\": \"M\"\r\n      },\r\n      \"7\": {\r\n        \"id\": 7,\r\n        \"name\": \"Heller\",\r\n        \"gender\": \"M\"\r\n      },\r\n      \"8\": {\r\n        \"id\": 8,\r\n        \"name\": \"Ivy\",\r\n        \"gender\": \"M\"\r\n      }\r\n    }\r\n  },\r\n  \"result\": {\r\n    \"departments\": [\r\n      1,\r\n      2,\r\n      3\r\n    ]\r\n  }\r\n}"
}
];

export default normalizr_data
