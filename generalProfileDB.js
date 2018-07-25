const generalProfileDB = {}

generalProfileDB.pros = [{
    statement : "PROS PROS PROS PROS PROS PROS PROS",
    why1 :   "PROS PROS PROS PROS PROS PROS PROS",
    why2 :   "PROS PROS PROS PROS PROS PROS PROS",
    why3 :   "PROS PROS PROS PROS PROS PROS PROS",
},
{
    statement : "PROS PROS PROS PROS PROS PROS PROS",
    why1 :   "PROS PROS PROS PROS PROS PROS PROS",
    why2 :   "PROS PROS PROS PROS PROS PROS PROS",
    why3 :   "PROS PROS PROS PROS PROS PROS PROS",
},
{
    statement : "PROS PROS PROS PROS PROS PROS PROS",
    why1 :   "PROS PROS PROS PROS PROS PROS PROS",
    why2 :   "PROS PROS PROS PROS PROS PROS PROS",
    why3 :   "PROS PROS PROS PROS PROS PROS PROS",
},
],
generalProfileDB.cons = [{
    statement : "no no no no no no no no no",
    why1 :   "no no no no no no no no no",
    why2 :   "no no no no no no no no no",
    why3 :   "no no no no no no no no no",
},
{
    statement : "no no no no no no no no no",
    why1 :   "no no no no no no no no no",
    why2 :   "no no no no no no no no no",
    why3 :   "no no no no no no no no no",
},
{
    statement : "no no no no no no no no no",
    why1 :   "no no no no no no no no no",
    why2 :   "no no no no no no no no no",
    why3 :   "no no no no no no no no no",
},
]

// console.log(generalProfileDB.pros)
// console.log(generalProfileDB.cons)

// Persist the database to localStorage
const saveDatabaseGeneralProfile = function (databaseObjectGeneralProfile, localStorageKeyGeneralProfile) {
    /*
        Convert the Object into a string.
    */
   const stringifiedDatabaseNews = JSON.stringify(databaseObjectGeneralProfile)

   /*
       Create a key in local storage, and store the string
       version of your inventory database as the value
   */
   localStorage.setItem(localStorageKeyGeneralProfile, stringifiedDatabaseNews)
 }
 saveDatabaseGeneralProfile(generalProfileDB.pros, "GeneralProfilePros")
 saveDatabaseGeneralProfile(generalProfileDB.cons, "GeneralProfileCons")