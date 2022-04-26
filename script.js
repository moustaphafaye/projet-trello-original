 const ajouter=document.getElementById("ajouter")
 const note=document.getElementById("note")
 var container=document.querySelector(".container")
 const modal=document.getElementById("modal")
 const closse=document.getElementById("close")
 const submit=document.getElementById("submit_btn")
 const cacherlenav=document.getElementById("cacherlenav")
 var nav=document.querySelector(".nav")
 var save=document.getElementById("save")
 const corbeilbutton=document.querySelector('.corbeilbutton')
 const divcorbiel=document.querySelector('.divcorbiel')
//  var ddate=document.querySelector("#date")
var divlesbuttons=document.querySelector(".divlesbuttons")
 const couleur=[
     '#EE8579','#284825','#0B1023','#402D1F','#DCB2B1']
 var forme=document.querySelector('#form')
          
 var recupertextarea=document.getElementById("recupertextarea")
 note.disabled=true
    // ajouter.addEventListener('click',function(){
        
    //     trello();
       
    //     submit.addEventListener('click',stopnote)

        
       
        // console.log(col)
        
       // ()=>{
            // var trol=document.querySelectorAll(".trello_note")
            // var inputnote=document.createElement("input")
            // inputnote.setAttribute("style","text")
            // inputnote.value=recupertextarea.value
            // trol[0].appendChild(inputnote)
            // modal.classList.remove("show-modal")
            
       // })
    // })

    //  note.addEventListener('click',()=>
    //     modal.classList.add('show-modal'))
    
    // closse.addEventListener('click',function(){
    //     modal.classList.remove("show-modal")
    // }) 
    // cacherlenav.addEventListener('click',function(){
    //     container.classList.toggle("show-container")
    //     cacherlenav.classList.toggle("show-button")
    //     nav.classList.toggle("show-nav")
    //     corbeilbutton.classList.toggle('show-corbielbutton')
    //     divlesbuttons.classList.toggle('divlesbuttonsmoblie')
    //     // divcorbiel.classList.toggle("div_corbeil_show")
    // })  
    // corbeilbutton.addEventListener('click',function(){
    //     divcorbiel.classList.toggle("div_corbeil_show")

    // }) 
    // submit.addEventListener('click',()=>{
    //     console.log(recupertextarea.value)
    //     var inputnote=document.createElement("input")
    //     inputnote.setAttribute("style","text")
    //     inputnote.innerHTML=recupertextarea.value
    //     trello_note.appendChild(inputnote)
    //     modal.classList.remove("show-modal")
    // })

    // function show_error(parti,message){
    //     const form_control=parti.parentElement
    //     const small=form_control.querySelector("small")
    //     form_control.className="form_contr couleur_error"
    //     small.innerHTML=message 

        
    // }
    // function show_succes(input){
    //     const form_control=element.parentElement
    //     form_control.className=""
    // }
    // function valide(){
       
    //     const textarea=forme[0].value
    //     if(textarea==""){
    //         show_error(textarea,"champ obligatoire")
    //     }
    // }
    
    function stopnote(){
        var trol=document.querySelectorAll(".trello_note")
        var inputnote=document.createElement("input")
        var divinput=document.createElement("div")
        var divsppan=document.createElement("div")
        var button1=document.createElement("button")
        var button2=document.createElement("button")
        var span1=document.createElement("span")
        var span2=document.createElement("span")
        var span3=document.createElement("span")
        // var trello_nom_taille=document.querySelector(".trello_note")
        button1.innerHTML="<<"
        button2.innerHTML=">>"
        var isup_intup=document.createElement("i")
        inputnote.value=forme[0].value
        
        
        button2.setAttribute("class","vadroit")
        inputnote.setAttribute("style","text")
        inputnote.setAttribute("class","inputnote")
        divinput.setAttribute("class","div")
        divsppan.setAttribute("class","sppan")
        isup_intup.setAttribute("class","fa-solid fa-trash-can")
        isup_intup.setAttribute("id","isup-intup")
        span1.innerHTML=forme[1].value
         span2.innerHTML=forme[2].value
        span3.innerHTML=forme[3].value

        //////////////////////////moment()/////////////////::
        var actuel=moment();
        // console.log(actuel)
        var datetache=forme[1].value
        var hdebut=forme[2].value
        var hfin=forme[3].value
        var durationhdebut=moment.duration(hdebut,'milliseconds');
        var durationhfin=moment.duration(hfin,'milliseconds');
        var difference=durationhfin-durationhdebut
        var momentTache=moment(datetache+" "+hdebut,"YYYY-MM-DD HH:mm")
        var differencemoment=momentTache-actuel
        if(difference<0){
            alert("l'heure de fin doit etre superieur ")

        }
       
        // var dureetache=
    //    var differencemoment=momentTache-actuel
            if(differencemoment<0){
                alert("incorrect")
            }
           
        setTimeout(()=>{

            divinput.classList.add("color")
            
            },differencemoment);
            setTimeout(()=>{

                divinput.classList.add("colorr")
                button1.disabled=true
                button2.disabled=true
                inputnote.disabled=true
                isup_intup.visibility="hidden"
                },differencemoment+difference);
        divsppan.appendChild(span1)
        divsppan.appendChild(span3)
        divsppan.appendChild(span2)

        divinput.addEventListener('click',function(){
            divsppan.classList.toggle("sppan_show")
         })

        divinput.appendChild(button1)
        divinput.appendChild(inputnote)
        divinput.appendChild(button2)
        divinput.appendChild(isup_intup)
        divinput.appendChild(divsppan)
       
        isup_intup.addEventListener('click',function(){
        
        divcorbiel.appendChild(this.parentElement)
        })
        button2.addEventListener('click',function(){
            this.parentElement.parentElement.parentElement.nextSibling.querySelector(".trello_note").appendChild(this.parentElement)
            button1.style.visibility="visible"
                if(this.parentElement.parentElement.parentElement.nextSibling===null){
                    button2.style.visibility="hidden"
                }         
        })
        
        button1.style.visibility="hidden"
        button1.addEventListener('click',function(){
            this.parentElement.parentElement.parentElement.previousSibling.querySelector(".trello_note").appendChild(this.parentElement)
            button2.style.visibility="visible"
           
            if(this.parentElement.parentElement.parentElement.previousSibling===null){
                button1.style.visibility="hidden"
            }   
    })
        trol[0].appendChild(divinput)
        modal.classList.remove("show-modal")
        savedonnes();
    }
         

  var i=0;
  var j=1
 
 function trello(){
    note.disabled=false
   
     var ele=container.querySelectorAll(".trello1")
     if(ele.length<5){

    
    var trello1=document.createElement("div")
    var trello_nom=document.createElement("div")
    var trello_note=document.createElement("div")
    var ii=document.createElement("i")
    var span=document.createElement("span")
    
    ii.setAttribute("id","bnv")
    

    span.innerHTML="Colonne "+j
    j++
    trello_nom.appendChild(span)    
    trello_nom.addEventListener('click',function(){
        var input_nom=document.createElement("input")
        input_nom.value=span.innerHTML
        
        trello_nom.removeChild(span)
        
        input_nom.className="input_nom"
        trello_nom.appendChild(input_nom)
     })
    ii.className="fa-solid fa-trash-can"
    trello1.className="trello1"
    trello1.style.background = couleur[i]
    trello1.style.backgroundImage="url('cv.png')"
    trello1.style.backgroundPosition="center"
    i++;
    
    for(k=0;k<ele.length;k++){
        if(ele.length!=0){
            ii.addEventListener('click',function(){
                container.removeChild(trello1) 
                i=i-1
                j--
                
        })
        }
        if(ele.length==0){
            ii.addEventListener('click',function(){
                container.removeChild(trello1) 
        })
        }
     }
    span.className="input_nom"

    trello_nom.className="trello_nom"

    trello_note.className="trello_note"
   
   
    trello_note.appendChild(ii)
    trello1.appendChild(trello_nom)
    trello1.appendChild(trello_note)
    container.appendChild(trello1)
  
     } 
 }

 ajouter.addEventListener('click',function(){
        
    trello();
   
    // submit.addEventListener('click',()=>{
    //     stopnote();
    // })

})
submit.addEventListener('click',()=>{
   
    stopnote();
    valide();
})

 note.addEventListener('click',()=>
    modal.classList.add('show-modal'))

closse.addEventListener('click',function(){
    modal.classList.remove("show-modal")
}) 
cacherlenav.addEventListener('click',function(){
    container.classList.toggle("show-container")
    cacherlenav.classList.toggle("show-button")
    nav.classList.toggle("show-nav")
    corbeilbutton.classList.toggle('show-corbielbutton')
    divlesbuttons.classList.toggle('divlesbuttonsmoblie')
    // divcorbiel.classList.toggle("div_corbeil_show")
})  
corbeilbutton.addEventListener('click',function(){
    divcorbiel.classList.toggle("div_corbeil_show")

}) 
var actuell=moment();
        
    var datetach=forme[1].value
    var hhdebut=forme[2].value
    var hhfin=forme[3].value
    var durationhhdebut=moment.duration(hhdebut,'milliseconds');
    var durationhhfin=moment.duration(hhfin,'milliseconds');
    var differenceh=durationhhfin-durationhhdebut
    var momentTach=moment(datetach+" "+hhdebut,"YYYY-MM-DD HH:mm")
    var differencemomen=momentTach-actuell 

function show_error(parti,message){
    const form_control=parti.parentElement
    const small=form_control.querySelector("small")
    form_control.className="form_contr couleur_error"
    small.innerHTML=message  
} 
function show_succes(input){
    const form_control=element.parentElement
    form_control.className="form_contr couleur_succes"
}
function valide(){
    const textarea=forme[0].value
    if(textarea===""){ 
        show_error(textarea,"champ obligatoire")
    } 
}

 
 window.onload = async ()=>{
    //  let data = await getdata();
    //  console.log(await getdata())
 }

 async function getdata(ob_etat){

    let form = new FormData();

    form.append("controller","securite") 
    form.append("Nom",JSON.stringify(ob_etat));
    // form.append("Prenom","Mor");

     let reponse= await fetch("http://localhost:8002/",{
        method: "POST",
        body:form 
     })
     return await reponse.json();
 }
 
 save.addEventListener('click',async function(){
    alert("Enregistrement avec succes")
    var data= savedonnes() 
    console.log(await getdata(data)); 
    
    
})
function savedonnes(){
    
     var ladate=moment();
     
    var tourcolonne=document.querySelectorAll('.trello1')
    var ob_etat={
        date:"",
        colonnes:[]
    }
    ob_etat.date=`${ladate}`
    tourcolonne.forEach(element => {
        var col={
            nom:"",
            taches:[]
        }
        col.nom=element.querySelector('.input_nom').innerHTML
        col.taches=[]
        element.querySelectorAll('.div').forEach(element1 => {
            var tache={
                description:"",
                date:"",
                heured:"",
                heuref:"",
            };
            tache.description=element1.querySelector('.inputnote').value
            tache.date=element1.querySelector('.sppan').firstElementChild.innerHTML
            tache.heured=element1.querySelector('.sppan').firstElementChild.nextElementSibling.innerHTML
            tache.heuref=element1.querySelector('.sppan').lastElementChild.innerHTML
            col.taches.push(tache)
        });
        // ob_etat.date=ladate.innerHTML;
        ob_etat.colonnes.push(col)
        // console.log(ob_etat)  

    });
    return ob_etat;
  

}


//  function modal(){

//         var modal_contain=document.createElement("div")
//         var modal=document.createElement("div")
//         var button=document.createElement("button")
//         var i=document.createElement("i")
//         var modal_header=document.createElement("div")
//         var h3h=document.createElement("h3")
//         //modal container
//         var modal_content=document.createElement("div")
//         var p=document.createElement("p")
//         //form
//         var form=document.createElement("form")
//         //les 3 inputs
//         var divform1=document.createElement("div")
//         var label1=document.createElement("label")
//         var textarea=document.createElement("textarea")

//         var divform2=document.createElement("div")
//         var label2=document.createElement("label")
//         var input2=document.createElement("input")

//         var divform3=document.createElement("div")
//         var label3=document.createElement("label")
//         var input3=document.createElement("input")

//         var divform4=document.createElement("div")
//         var label4=document.createElement("label")
//         var input4=document.createElement("input")

//         input2.setAttribute("style","date")
//         input3.setAttribute("style","time")
//         input4.setAttribute("style","time")
//         var submit=document.createElement("input")

//         submit.setAttribute("type","submit")

//         modal_contain.className="show-modal"
//         // modal_contain.classList.add("show.modal")
//         modal.className="modal"
//         modal_header.className="modal-header"
//         modal_content.className="modal-content"
//         i.className="fa fa-times"

//         //les appchirks

//         divform1.appendChild(label1)
//         divform1.appendChild(textarea)

//         divform2.appendChild(label2)
//         divform2.appendChild(input2)

//         divform3.appendChild(label3)
//         divform3.appendChild(input3)

//         divform4.appendChild(label4)
//         divform4.appendChild(input4)

//         p.innerHTML="Rampliser les informations de la nouvelle Tache"
//         h3h.innerHTML="Nouvelle Tache"
//         button.innerHTML=i
//         form.appendChild(divform4)
//         form.appendChild(divform3)
//         form.appendChild(divform2)
//         form.appendChild(divform1)
//         form.appendChild(submit)

//         modal_content.appendChild(form)
//         modal_content.appendChild(p)
//         modal_header.appendChild(h3h)

//         modal.appendChild(button)
//         modal.appendChild( modal_header)
//         modal.appendChild(modal_content)
//         modal_contain.appendChild( modal)
//  }
