// ------------------------------ 1️⃣ السؤال الأول ------------------------------
//     - driving اسمها function عرف دالة او
//     - تأخذ عمر شخص (رقم) واذا كان اكبر من 18 تطبع
//          🚘😍 مبروك سوف تحصل على الليسن
//     - واذا كان اقل من 18 يطبع
//          😢 للاسف عمرك لا يسمح
//     console.log ، if ملاحظة: سوف تستخدم

// 👇 هنا function عرف الدالة او
 
driving (19);

function driving (x) {
   
    if(x >= 18 ) {
    console.log("مبروك سوف تحصل على الليسن")
    }
    else {
       console.log("للأسف عمرك لا يسمح") 
    }
 
   
    
}


// لا تنسى أن تنادي الدالة



// ------------------------------ 2️⃣ السؤال الثاني ------------------------------
// 2️⃣ السؤال الثاني
//     - iceCream واجعل اسمها array عرف مصفوفة او
//     - 🍦 احفظ فيها مجموعة من نكهات الآيس كريم
//     - console.log لطباعة قائمة نكهات الآيس كريم بإستخدام for loop استخدم

// 👇 هنا array عرف المصفوفة او

let iceCream =["mango", "strawberry", "chocolate","pinacolada"]
for (let x of iceCream) {
    console.log(x)
}



// --------------------------------- ✨ بونص ------------------------------------
// بحيث عند مناداة الدالة تطبع القائمة myIceCream بإسم function عرف دالة او
// for loop عرف مصفوفة أخرى تحتوي على أفلامك الكرتون المفضلة بالنسبة لك وقم بطباعة الأفلام بإستخدام

// --------------------------------- 🔥 بونص ------------------------------------
// while loop اطبع احد المصفوفات بإستخدام
 
myIceCream (iceCream)

function myIceCream (z) {
    console.log(iceCream)
}
 
let cartoon = [ "minions" , "spongebob", " ponyo"]
for (let v of cartoon) {
    console.log(cartoon)
}

let y = 0;
while (y< cartoon.length){
    console.log(cartoon[y])
    y++
 
} 


