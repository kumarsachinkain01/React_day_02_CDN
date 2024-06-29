/*const divRef = React.createElement("div",null, [
    React.createElement("h1",null, "Learn Web Development"),
    React.createElement("p", null,"Welcome to the MDN learnig area. This set of artcles aims to guide complete beginners to web development with all that they need to start codding websites.")
]);

ReactDOM.render(divRef, document.getElementById("root"));
*/

/*
const h1Ref = <h1>Learn Web Development</h1>

ReactDOM.render(h1Ref,document.getElementById("root"));
*/
/*
const Image = React.createElement("img",{
    src:"https://documents.iplt20.com/ipl/IPLHeadshot2024/6.png",
    width:"250px",
    height:"250px"
})

ReactDOM.render(Image,document.getElementById("root-2"));
*/

const container = (
  <div>
    <h1 class="heading">Learn Web Development</h1>
    <br/>
    <p class="para_All">
      Welcome to the MDN learnig area. This set of artcles aims to guide
      complete beginners to web development with all that they need to start
      codding websites.
      
    </p>
    <br/>
    <p class="para_All">
      The aim of this area od MDN is not to tak you from "beginner to "expert"
      but to take you from "beginner" to "comfortable". From there, you should
      be able to start kmaking your way , learning from<a href="https://developer.mozilla.org/en-US/" target="_blank"> The rest of MDN</a>, and other intermediate to advance resources that assume a lot of previous knowledge.
    </p>
    <br/>
    <p class="para_All">
      If you are a complete beginner, web development can be challenging -- we will hold your hand and provide enough detail for you to fel comfertable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of the class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.
    </p>
  </div>
);
ReactDOM.render(container, document.getElementById("root"));
