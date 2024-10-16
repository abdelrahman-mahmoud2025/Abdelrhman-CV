document.getElementById('sendMessageButton').addEventListener('click', function (event) {
    event.preventDefault();

    // جلب القيم من الحقول
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    // إذا كانت أي من الحقول فارغة
    if (name === "" || email === "" || subject === "" || message === "") {
        // عرض النافذة المنبثقة
        document.getElementById('popup').style.display = 'flex';
        return;
    }

    // تنسيق الرسالة كما هو مطلوب
    var whatsappMessage = "الأسم: " + name + "\n" +
                        "الإيميل: " + email + "\n" +
                        "عنوان الموضوع: " + subject + "\n" +
                        "محتوى الرسالة: " + message;

    // رقم الواتساب
    var phoneNumber = "+201277697483";

    // إنشاء رابط واتساب وإعادة توجيه المستخدم إليه
    var whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(whatsappMessage);
    window.open(whatsappUrl, '_blank');
});

// إغلاق النافذة المنبثقة عند الضغط على زر OK
document.getElementById('closePopup').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'none';
});
