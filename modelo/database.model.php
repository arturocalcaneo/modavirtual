<?php
    class Database {
        
        private $con = null;
        private string $host;
        private string $user;
        private string $pass;
        private string $database;

        public function __construct(){
            $this->host = "localhost";
            $this->user = "root";
            $this->pass = "";
            $this->database = "modavirtual";
        }

        public function conectar(){
            $this->setCon(mysqli_connect(
                $this->host,
                $this->user,
                $this->pass,
                $this->database,
                3306
            ));
        }

        public function cerrarConexion(){
            if($this->getCon() != null){
                mysqli_close($this->getCon());
            }
        }

        public function getCon(){
            return $this->con;
        }

        private function setCon($con){
            $this->con = $con;
        }
    }
?>