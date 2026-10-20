package com.employeeCrud.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import java.time.LocalDate;

@Entity
@Data
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long empId;
    private String firstName;
    private String lastN;
    private Long Id;
    private String Name;
    private String lastName;
    private String emailID;
    private String phoneNumber;
    private String department;
    private String designation;
    private Double empSalary;
    private LocalDate joining;
    private String EmpAddress;
}
