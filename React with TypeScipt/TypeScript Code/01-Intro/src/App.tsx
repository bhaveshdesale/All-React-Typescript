import './App.css'
import Greet from './components/Greet'
import OptionalType from './components/OptionalType';
import Oscar from './components/Oscar';
import Person from './components/Person'
import PersonList from './components/PersonList';
import ProfileCard from './components/ProfileCard';
import ProfileCardMiniProject from './components/ProfileCardMiniProject';
import Status from './components/Status';
import Heading from './Heading';
function App() {

// Passing props as object
const data={
  firstName:"Bhavesh",
  age:22
}

// Passing props as array
const nameList=[
  {
    first:"Bhavesh",
    last:"Desale"
  },
  {
    first:"Bhavesh",
    last:"Rajput"
  },
  {
    first:"Bhumika",
    last:"Patil"
  },
  {
    first:"Chaitali",
    last:"Patil"
  },
  {
    first:"Chandrakant",
    last:"Patil"
  },
];


// Passing advanced Props Like passing children as prop to component is demonstrate in
//in Heading 

// Passing React component as a children prop is demonStated in Oscar Component


// Passing Optinal Type as props is demonstrated in OptionalType Component

// Mini Project is demonstrated in ProfileCardMiniProjectComponent
const profileData=[{
name:"Bhavesh",
age:22,
email:"abc@gmail.com",
role:"admin",
address:"America"
},
{
  name:"Saurabh",
  age:21,
  email:"bca@gmail.com",
  role:"user"
}


]


  return (
   <>
   <Greet name="Bhavesh" city="America" isLoggedIn={true} />
   <Person name={data}/>
   <PersonList names={nameList}/>
   <Status status="Error"/>
   <Heading>Placeholder text</Heading>
    <Oscar>
      <Heading>Never Give Up : ngu</Heading>
    </Oscar>
    <OptionalType name="Bhavesh"/>
    <ProfileCardMiniProject profileData={profileData}/>
    <ProfileCard>
      <ProfileCardMiniProject profileData={profileData}/>
    </ProfileCard>
   </>
  )
}

export default App
