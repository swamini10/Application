package net.javaguides.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;

import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.repository.EmployeeRepository;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}
    @Autowired
	private EmployeeRepository employeeRepository;
	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub

		Employee employee = new Employee();
		employee.setFirstName("Swami");
		employee.setLastName("Bhandare");
		employee.setEmailId("swamini@10gmail.com");
		employeeRepository.save(employee);

		Employee employee1 = new Employee();
		employee1.setFirstName("Soham");
		employee1.setLastName("Mali");
		employee1.setEmailId("soham@10gmail.com");
		employeeRepository.save(employee1);

	}

}
