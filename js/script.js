const calculateBtn = document.querySelector("#calculateBtn");

function calculateTip() {
    const billAmount = parseFloat(document.querySelector("#billAmount").value);
    const serviceQuality = parseFloat(document.querySelector("#serviceQuality").value);

    if (billAmount === "") {
        alert("Please fill in the details.");
        return;
    }

    const tipAmount = billAmount * serviceQuality;
    const totalAmount = billAmount + tipAmount;

    const tipAmountInput = document.querySelector("#tipAmount");
    const totalAmountInput = document.querySelector("#totalAmount");

    tipAmountInput.value = tipAmount.toLocaleString("en-IE", {
        style: "currency",
        currency: "EUR"
    })
    totalAmountInput.value = totalAmount.toLocaleString("en-IE", {
        style: "currency",
        currency: "EUR"
    })
}

calculateBtn.addEventListener("click", calculateTip);