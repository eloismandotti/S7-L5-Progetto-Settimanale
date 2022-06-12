let jsonPath = '../json/users.json';
let allUsers = fetch(jsonPath).then(response => response.json());

function getAllUsers() {
    allUsers.then(respUsers => renderUsersCards(respUsers));
} 

function renderUsersCards(users) {

    const container = document.createElement("div");
    container.className = "container"

    const row = document.createElement("div");
    row.className = "row justify-content-around"

    users.forEach(element => {
        // card
        const card = document.createElement("div");
        card.className = "card custom-card";

            // profile picture
            const profilePic = document.createElement('img');
            profilePic.className = "card-img card-img-top mt-3 custom-img";
            profilePic.src = element.profileURL;
            card.appendChild(profilePic);

            // card title (name surname)
            const title = document.createElement("h4");
            title.className = "card-title text-center mt-3";
            const textNode = document.createTextNode(element.firstName + " " + element.lastName);
            title.appendChild(textNode);
            card.appendChild(title);

            //description
            const description = document.createElement("p");
            description.className = "text-center";
            const dexNode = document.createTextNode(element.email);
            description.appendChild(dexNode);
            card.appendChild(description);

            //button
            const detailButton = document.createElement("button");
            detailButton.className = "btn btn-primary";
            let toggle = false;
            detailButton.onclick = function () {
                console.log("caso 0", toggle)
                if (toggle) {
                    toggle = false;
                    btnText.nodeValue = "Show more";
                    detail.removeChild(detNode);
                    console.log("caso 1", toggle)
                } else {
                    toggle = true;
                    btnText.nodeValue = "Hide";
                    detail.appendChild(detNode);
                    console.log("caso 2", toggle)
                }
                
            };
            const btnText = document.createTextNode("Show more");
            detailButton.appendChild(btnText);
            card.appendChild(detailButton);

            //detail
            const detail = document.createElement("div")
            detail.className = "text-center m-2";
            const detNode = document.createTextNode("Username: " + element.username + " - " +  "Gender: " + element.gender);         
            card.appendChild(detail);

        row.appendChild(card);

    });

    container.appendChild(row)
    document.body.appendChild(container);

    console.log(users)
}

document.addEventListener('DOMContentLoaded', function() {
    getAllUsers();
})