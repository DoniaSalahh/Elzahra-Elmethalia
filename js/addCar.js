


async function addCategory(event) {
    event.preventDefault();
    const categoryName = document.getElementById('name').value;
    if (!categoryName ) {
        alert('يرجى ملء جميع الحقول.');
        return;
    }
    const data = {
        name: categoryName,
    };
    const userToken = localStorage.getItem("usertoken");
    try {
        const response = await axios.post('https://test-2-lbcq.onrender.com/category/addCategory', data, {
            headers: {
            'token': userToken,
            'Content-Type': 'application/json'
            }
        });
    console.log(response.data)
        if (response.data.message === "Category created successfully") {
            alert('تمت إضافة الفئة بنجاح');
        } else {
            alert('حدث خطأ أثناء إضافة الفئة. حاول مرة أخرى.');
        }
} catch (error) {
        console.error('حدث خطأ أثناء إضافة الفئة:', error);
        alert('حدث خطأ أثناء إضافة الفئة. حاول مرة أخرى.');
    }
}
  


async function loadCategories() {
    try {
        const response = await axios.get('https://test-2-lbcq.onrender.com/category');
        const categories = response.data.cat;
        const categorySelect = document.getElementById('categoryId');

        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category._id;
            option.textContent = `${category.name} ${category._id}`;
            categorySelect.appendChild(option);
        });

    } catch (error) {
        console.error('حدث خطأ أثناء تحميل الفئات:', error);
        alert('حدث خطأ أثناء تحميل الفئات. حاول مرة أخرى.');
    }
}

window.onload = function() {
    loadCategories();
};


function addCar() {
    let name = document.getElementById("Name").value;
    let capacity = document.getElementById("capacity").value;
    let description = document.getElementById("description").value;
    let addresses = document.getElementById("addresses").value;
    let prices = document.getElementById("prices").value;
    let categoryId = document.getElementById("categoryId").value.trim(); 
    let carImage = document.getElementById("images").files;
    const userToken = localStorage.getItem("usertoken");

    if (!name || !capacity || !description || !addresses || !prices || !categoryId || carImage.length === 0) {
        alert('الرجاء ملء جميع الحقول المطلوبة.');
        return;
    }

    console.log(categoryId)

    let formData = new FormData();
    formData.append('name', name);
    formData.append('capacity', capacity);
    formData.append('description', description);
    formData.append('addresses', addresses);
    formData.append('prices', prices);
    formData.append('categoryId', categoryId); 
    const validExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'];

    for (let i = 0; i < carImage.length; i++) {
        let fileName = carImage[i].name.toLowerCase();
        let fileExtension = fileName.split('.').pop();
        if (!validExtensions.includes(fileExtension)) {
            alert('الرجاء تحميل صورة بصيغة معتمدة فقط (jpg, jpeg, png, gif, bmp, webp).');
            return;
        }
        formData.append('carImage', carImage[i]);
    }

    axios.post("https://test-2-lbcq.onrender.com/car/addCar", formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'token': userToken
        }
    })
    .then((response) => {
        if(response.data.message === "Car created successfully") {
            alert('تم اضافة العربية بنجاح');
        }
    console.log(response.data)

    })
    .catch((error) => {
        console.error("Error:", error.response ? error.response.data : error.message);
        alert('حدث خطأ. حاول مرة أخرى.');
    });
}
