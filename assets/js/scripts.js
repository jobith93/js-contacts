// custom scripts

// Person Class
function Person(name, relation, phone){
    this.name = name;
    this.relation = relation;
    this.phone = phone;

    // method to show to contact in details panel
    this.show = function (){ 
        document.getElementById('c-name').innerHTML = this.name;
        document.getElementById('c-relation').innerHTML = this.relation;
        document.getElementById('c-phone').innerHTML = this.phone;
     }
}

var People = new Array();

// creating the three new people
People.push(new Person("Jobith", "Friend", "8904330374"));
People.push(new Person("Joel", "Friend", "8904330374"));
People.push(new Person("Jijo", "Friend", "8904330374"));

//console.log(People);

// function to show the list in the contacts-list
function showList(){
    var list = "";
    for(var i=0; i<People.length; i++){
         list += '<li><div class="contact" onClick="conClick('+i+')"><img src="assets/img/profile.jpg" class="profile" /><div class="details"><h4>'+People[i].name+'<br><small>'+People[i].relation+'</small></h4></div></div></li>';
    }
    //console.log(list);
    document.getElementById('con-list').innerHTML = list;
};

// call the function to render the list for the first time
showList();

// function to create a new person when the button is clicked in the html form
function createPerson(){
    var name = document.getElementById("inp-name").value;
    var relation = document.getElementById("inp-relation").value;
    var phone = document.getElementById("inp-phone").value;
    People.push(new Person(name, relation, phone));

    // after a new person is created, refresh the contacts-list
    showList();
    
    // clear the form after successful creation of person
    document.getElementById("inp-name").value = "";
    document.getElementById("inp-relation").value = "";
    document.getElementById("inp-phone").value = "";

    // update the details panel with latest, created above 
    People[People.length - 1].show();
}

// onClick,, of the contact, show the details on the details panel
function conClick(id){
    People[id].show();
}