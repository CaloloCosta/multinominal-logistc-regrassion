document.getElementById("form").addEventListener("submit",async e =>{
    e.preventDefault()
    console.log("Somethong just happened!")
    
    department = document.getElementsByClassName("department")[0]
    department = department[department.selectedIndex].value

    prg = document.getElementsByClassName("prg")[0]
    prg = prg[prg.selectedIndex].value

    db = document.getElementsByClassName("db")[0]
    db = db[db.selectedIndex].value

    math = document.getElementsByClassName("math")[0]
    math = math[math.selectedIndex].value

    ntw = document.getElementsByClassName("ntw")[0]
    ntw = ntw[ntw.selectedIndex].value

    cs = document.getElementsByClassName("cs")[0]
    cs = cs[cs.selectedIndex].value

    jt = document.getElementsByClassName("jt")[0]
    jt = jt[jt.selectedIndex].value

    console.log(`${department} ${prg} ${db} ${math} ${ntw} ${cs} ${jt}`)

    data = `${department} ${prg} ${db} ${math} ${ntw} ${cs} ${jt}`

    document.getElementById("loader").style.display = "block"
    response = await fetch(`http://localhost:3000/predict?values=${data}`,{
        mode: 'cors'
    })

    data = await response.json()
    document.getElementById("loader").style.display = "none"
    console.log(data.predicted)
    document.getElementById('module').innerText = data.predicted
    
})