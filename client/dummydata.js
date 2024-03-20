// Dummy data for demonstration
// NOTE: This will be replaced by DB and generated with backend code once completed
const quoteHistoryData = [
  {
    gallonsRequested: 100,
    deliveryAddress: "2406 BF Terry Blvd, Rosenberg, TX, 77471",
    deliveryDate: "2024-02-20",
    suggestedPrice: 2.5,
    totalAmountDue: 250,
  },
  {
    gallonsRequested: 150,
    deliveryAddress: "5115 Avenue H, Rosenberg, TX, 77471",
    deliveryDate: "2024-02-15",
    suggestedPrice: 2.75,
    totalAmountDue: 412.5,
  },
  // Add more quote history data as needed
];

// Function to populate the quote history table
function populateQuoteHistoryTable() {
  const tableBody = document.getElementById("quoteHistoryBody");

  quoteHistoryData.forEach((quote) => {
    const row = document.createElement("tr");

    const gallonsCell = document.createElement("td");
    gallonsCell.textContent = quote.gallonsRequested;
    row.appendChild(gallonsCell);

    const addressCell = document.createElement("td");
    addressCell.textContent = quote.deliveryAddress;
    row.appendChild(addressCell);

    const dateCell = document.createElement("td");
    dateCell.textContent = quote.deliveryDate;
    row.appendChild(dateCell);

    const priceCell = document.createElement("td");
    priceCell.textContent = quote.suggestedPrice.toFixed(2);
    row.appendChild(priceCell);

    const amountCell = document.createElement("td");
    amountCell.textContent = quote.totalAmountDue.toFixed(2);
    row.appendChild(amountCell);

    tableBody.appendChild(row);
  });
}

// Call the function to populate the table on page load
populateQuoteHistoryTable();

module.exports = populateQuoteHistoryTable();

