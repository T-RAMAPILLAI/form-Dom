function labelcreate(tagname,attrname,attrvalue,content){
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele
}

function breakcreate(){
    var br = document.createElement("br");
    return br;
}

function inputcreate(tagname,attr1name,attr1value,attr2name,attr2value){
    var element=document.createElement(tagname)
    element.setAttribute(attr1name,attr1value)
    element.setAttribute(attr2name,attr2value)
    return element
}

function button(tagname,attrname,attrvalue){
    var elem=document.createElement(tagname)
    elem.innerHTML="submit"
    elem.setAttribute(attrname,attrvalue)
    return elem
}




var first=labelcreate("label","for","firstname","FirstName")
var brk1=breakcreate()
var input_first=inputcreate("input","type","text","id","firstname")
var brk11=breakcreate()



var middle=labelcreate("label","for","middlename","MiddleName")
var brk2=breakcreate()
var input_middle=inputcreate("input","type","text","id","middlename")
var brk22=breakcreate()


var last=labelcreate("label","for","lastname","LastName")
var brk3=breakcreate()
var input_last=inputcreate("input","type","text","id","Lastname")
var brk33=breakcreate()



var email=labelcreate("label","for","email","Email")
var brk4=breakcreate()
var input_email=inputcreate("input","type","email","id","email")
var brk44=breakcreate()



var pass=labelcreate("label","for","pass","Password")
var brk5=breakcreate()
var input_pass=inputcreate("input","type","password","id","pass")
var brk55=breakcreate()

var butt=button("button","type","submit")





document.body.append(first,brk1,input_first,brk11,middle,brk2,input_middle,brk22,last,brk3,input_last,brk33,email,brk4,input_email,brk44,pass,brk5,input_pass,brk55,butt)



