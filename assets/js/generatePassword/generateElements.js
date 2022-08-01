export const generateElements = () => {

    //Boolean whether or not we should generat the HTML elements for you (if you dont want to write HTML for this)
    var readyToGenerate = true;

    //Loop through current HTML document's Body
    document.body.childNodes.forEach((element) => {

        //Check if elements should be rendered in if 
        // 1. they've already started adding elements with our reccommended class names
        if (element.className == 'generate-password' || element.className == 'container') {
            console.log(element.className)
            readyToGenerate = false
        }

        if (document.querySelector('header').children) {


        }
    })

    if (readyToGenerate == true) {
        console.log('no child nodes')
        document.body.innerHTML = `<header><h1>Password Generator</h1></header>
        <section class="container">
            <h3>Generate a password: </h1>
            <div class="password-container">
                <textarea placeholder="Your Secure Password" id="password"></textarea>
            </div>

            <button id="generate-password" class="btn">Generate Password</button>
            <div class="options-container">
                <h2>Generation Criteria:</h2>
                <div class="options-buttons-container">
                    <div class="input-cont">

                        <label for="length">Length:</label>
                        <input type="number" name="criteria" id="length">
                        <div class="hover-text">Min:8 Max:128</div>
                    </div>
                    <div class="input-cont">
                        <label for="lowercase"> Lowercase:</label>
                        <input type="checkbox" name="criteria" id='lowercase'>
                    </div>
                    <div class="input-cont">
                        <span></span> <label for="uppercase"> Upercase:</label>
                        <input type="checkbox" name="criteria" id='uppercase'>
                    </div>
                    <div class="input-cont">
                        <label for="numbers"> Numbers:</label>
                        <input type="checkbox" name="criteria" id='numbers'>
                    </div>
                    <div class="input-cont">
                        <label for="special-chars"> Special Characters:</label>
                        <input type="checkbox" name="criteria"
                            id='special-chars'>
                    </div>
                    <div class="input-cont">
                        <label for="pattern">Pattern</label>
                        <input type="checkbox" name="criteria" id="pattern">
                    </div>

                </div>
            </div>




        </section> `

    }

}

