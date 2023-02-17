import React from "react"

function Home () {
return(
    <div className="Homepage">
        <h1 className="hometitle"> ARK Survival Evovled Wiki</h1>

        <p className="Synopsis">Welcome to our ARK Survival Evovled Wiki page! You can view the Dinosaurs/Creatures that are currently in our database. If we dont have what you are looking for, feel free to add it to the database using the provided from in our Dino Directory </p>
        <div className="image-container">
        <img src="https://scontent-lax3-2.xx.fbcdn.net/v/t31.18172-8/11950465_512476565596920_3535451021847769092_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=3JmirRZYgJ0AX_YQQRW&_nc_ht=scontent-lax3-2.xx&oh=00_AfAwZrTGhQ-5wCmuCeSmy-Ug5m7D9g43GuiM7ir-MiaC5Q&oe=6414D3E6" alt="allosaurus" width="300px" height="200px"/>
        <img src="data:image/jpeg;base64,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" alt="achatina" width="300px" height="200px"/>
        <img src="https://scontent-lax3-1.xx.fbcdn.net/v/t31.18172-8/1781038_548513738659869_6143006277277384006_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=YG_xZccEzZUAX-HpG7R&_nc_ht=scontent-lax3-1.xx&oh=00_AfAnJcXhQGJjz-GGgQ4yj5Vh0F47mZS7-ceGc9Cwwr3WtQ&oe=6414E056" alt="ammonite" width="300px" height="200px"/>
        <img src="https://ark.wiki.gg/images/thumb/8/8e/Dossier_Ankylosaurus.png/320px-Dossier_Ankylosaurus.png" alt="ankylosaurus" width="300px" height="200px"/>
        <img src="https://scontent-lax3-2.xx.fbcdn.net/v/t31.18172-8/11906730_508281249349785_5866612668891385502_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=7rz2watQ7lAAX8MkzA7&_nc_ht=scontent-lax3-2.xx&oh=00_AfD5-jyKCvpL6Y-huCHIDY-ccFuOymRhRxKdkX1SwBNo1g&oe=6414CA51" alt="baryonyx" width="300px" height="200px"/>
        <img src="https://ark.wiki.gg/images/thumb/f/f7/Dossier_Brontosaurus.png/320px-Dossier_Brontosaurus.png" alt="brontosaurus" width="300px" height="200px"/>
        </div>
        
    </div>
)
}

export default Home