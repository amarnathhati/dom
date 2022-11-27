var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);
// Add item
function addItem(e) {
    e.preventDefault();
    // Get input value
    var newItem = document.getElementById('item').value;

    // Get input description
    var newdescription = document.getElementById('description').value

    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(` ${newdescription}`));

    // Create Edit button
    var editbtn = document.createElement('button');
    editbtn.className='btn btn-dark btn-sm float-right edit';
    editbtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editbtn);
    itemList.appendChild(li);

    // Create del button element
    var deleteBtn = document.createElement('button');
@@ -58,7 +69,10 @@ function filterItems(e) {
    // Convert to an array
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1) {

        // description text content
        var description = item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}