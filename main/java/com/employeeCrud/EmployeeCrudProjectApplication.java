package com.employeeCrud;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EmployeeCrudProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmployeeCrudProjectApplication.class, args);

		System.err.println("Employee Application is Running...");
	}

}
