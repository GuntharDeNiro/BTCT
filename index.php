<form id="form1" method="post" action ="<?php echo $_SERVER['PHP_SELF']; ?>"> <label>
<input id="search" name="search" type="text" />
</label>
<label>
<input type="submit" />
</label>
<img src="loading.gif" width="16" height="11" />
</form>
<p>

<?php
$search= $_REQUEST['search'];
if ($search > ''){ $search = $search;} else { $search = '';}
?>

<script type="text/javascript" src="http://www.google.com/jsapi"></script>
<script type="text/javascript">
google.load('visualization', '1', {packages: ['table']});
</script>
<script type="text/javascript">
var visualization;

function drawVisualization() {

var query = new google.visualization.Query(
'https://drive.google.com/open?id=1ZMIykqib-7AtHJ8QhKHE_n4bzLhJhBlumUcrS2z7bu8');

query.setQuery('SELECT A, B, C where upper(A) like upper("%<?php echo $search; ?>%") or upper(B) like upper("%<?php echo $search; ?>%") order by A asc label A "Type", B "Title", C "Date added"');

query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
if (response.isError()) {
alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
return;
}

var data = response.getDataTable();

visualization = new google.visualization.Table(document.getElementById('table'));
visualization.draw(data, {legend: 'bottom'});

}

google.setOnLoadCallback(drawVisualization);
</script>

<div id="table"></div>

</div>
