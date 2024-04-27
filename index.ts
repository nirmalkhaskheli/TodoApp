import inquirer from "inquirer"
let todos = []
let condition =true;
while(condition)
    {let todoQuestions= await inquirer.prompt(
    [
      { 
          name:"questionFirst",
          type:"input",
          message:"what would you like to add in your todos"

      },
      {
          name:"questionSecond",
          type:"confirm",
          message:"would you like to add more in yourr todos?",
          default:"true"

      }
    ]
);
      todos.push(todoQuestions.questionFirst);
      console.log(todos)
      condition=todoQuestions.questionSecond;
            



        

        

    





    }