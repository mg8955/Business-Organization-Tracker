INSERT INTO departments (name)
VALUES  ("sales"), 
        ("engineering"), 
        ("customer_support");

INSERT INTO roles (title, salary, department_id)
VALUES  ("SDR", 40000, 1), 
        ("sales_manager", 60000, 1), 
        ("engineer", 150000, 2), 
        ("lead_engineer", 200000, 2), 
        ("csr", 35000, 3), 
        ("csr_manager", 50000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES  ("Charlie", "Olives", 1, 2),
        ("Alex", "Volkanovski", 2, NULL),
        ("Joanna", "Jędrzejczyk", 3, 4),
        ("Petyr", "Yan", 4, NULL),
        ("Stipe", "Mioccic", 5, 6),
        ("Stephen", "Thompson", 6, NULL);
