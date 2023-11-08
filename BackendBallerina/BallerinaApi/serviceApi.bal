import ballerina/http;
import ballerina/time;

type User record {|
   readonly int id;
   string email;
   string password;
|};

type NewUser record {|
   string email;
   string password;
|};

type ResetUser record {|
 string email;
|};

table<User> key(id) users = table [
    {id: 1, email: "user1@example.com", password: "joe123"},
    {id: 2, email: "user2@example.com", password: "ala123"},
    {id: 3,  email: "user3@example.com", password: "bogdan123"}
];

type ErrorDetails record {
    string message;
    string details;
    time:Utc timeStamp;
};

type UserNotFound record {|
    *http:NotFound;
    ErrorDetails body;
|};

service /serviceApi on new http:Listener(9090) {

     // GET /users
     resource function get users() returns User[]|error {
        
        return users.toArray();
     }

     // GET /users/{int userId}
    resource function get user/[int id]() returns User|UserNotFound|error {
        User? user = users[id];
        if user is () {
            UserNotFound userNotFound = {
                body: {message: string `id: ${id}`,details:string `user/${id}`,timeStamp: time:utcNow()}
            };
            return userNotFound;
         }
          return user;
           
    } 
    
    // POST /users
    resource function post users(NewUser newUser) returns http:Created|error {
        users.add({id: users.length()+1, ...newUser});
        return http:CREATED;
    }

    // POST /auth/login
    resource function post auth/login(NewUser user) returns http:Ok|http:Unauthorized|error {
        
        User? existingUser = getUserByEmail(user.email);

        if (existingUser is User) {
            
            if (user.password == existingUser.password) {
                
                return http:OK;
            }
        }

        
        return http:UNAUTHORIZED;
    }

    // POST /users/resetPassword
    resource function post users/resetPassword(ResetUser userEmail) returns http:Accepted|http:BadRequest|error {
        
        User? existingUser = getUserByEmail(userEmail.email);

        if (existingUser is User) {
            
            existingUser.password = generateNewPassword();
            return http:ACCEPTED;
        }
        return http:BAD_REQUEST;
    }
    
}

    function generateNewPassword() returns string {
        return "new_password"; 
    }

    function getUserByEmail(string email) returns User? {
     foreach  User user in users {
            if (user.email == email) {
                return user;
            }
        }
        return ();
    }
