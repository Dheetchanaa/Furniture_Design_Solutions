<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
</head>
<body style="margin:50px;">
    <h2 style="text-align:center; padding:30px"><b>List of details for custom</b><h2>
        <table class="table table-striped table-hover">
        <thead style="font-size:30px">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Furniture</th>
                <th>Message</th>
            </tr>
        </thead>
        <tbody style="font-size:25px">
            <?php
            $servername= "localhost";
            $username= "root";
            $password= "";
            $database= "furnituredsform";

            $connection= new mysqli($servername, $username, $password ,$database);
            
            if($connection->connect_error){
                die("Connection failed:". $connection->connect_error);
            }

            $sql = "SELECT * FROM custom ";
            $result = $connection->query($sql);

            if(!$result){
                die("Invalid query:" . $connection->error);
            }

            while($row=$result-> fetch_assoc()){
                echo "<tr>
                <td>" . $row ["id"] ."</td>
                <td>" . $row ["name"] ."</td>
                <td>" . $row ["email"] ."</td>
                <td>" . $row ["options"] ."</td>
                <td>" . $row ["message"] ."</td>
                </tr>";
            }
            ?>
        </tbody>
        </table>
</body>
</html>