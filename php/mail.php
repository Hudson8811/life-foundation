<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
//require 'PHPMailer/SMTP.php';


if (isset($_POST['form']) && in_array($_POST['form'],['ask','modal'])){
	if ($_POST['form'] === 'ask'){
		$name = $_POST['name'];
		$phone = $_POST['phone'];
		$body = "
		<p>Имя: {$name}</p>
		<p>Телефон: {$phone}</p>
		";
	}
	if ($_POST['form'] === 'modal'){
		$name = $_POST['name'];
		$phone = $_POST['phone'];
		$email = $_POST['email'];
		$count = $_POST['count'];
		$types = [
			'1' =>  'Открыть транизутную (прокси) компанию',
			'2' =>  'Открыть представительство',
			'3' =>  'Сколько сотрудников будет оформлено в Сербии?'
		];
		$type = $types[$_POST['type']];

		$body = "
		<p>Имя: {$name}</p>
		<p>Телефон: {$phone}</p>
		<p>Email: {$email}</p>
		<p>Сотрудников: {$count}</p>
		<p>Ситуация: {$type}</p>
		";
	}


	$mail = new PHPMailer(true);

	try {
		$mail->setFrom('from@example.com', 'GoBalkans');
		$mail->addAddress('ellen@example.com');

		$mail->isHTML(true);
		$mail->Subject = 'Заявка с сайта';
		$mail->Body    = $body;

		$mail->send();
		echo json_encode(['status'=>'ok','error'=>'']);
	} catch (Exception $e) {
		header("HTTP/1.0 403 Forbidden");
		echo json_encode(['status'=>'error','error'=>'5']);
	}


} else {
	header("HTTP/1.0 403 Forbidden");
	echo json_encode(['status'=>'error','error'=>'1']);
}


die();
?>
