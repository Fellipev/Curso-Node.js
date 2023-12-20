CREATE TABLE faq(
    id int not null primary key auto_increment,
    usuario_id int not null,
    duvida TEXT,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);


SELECT 
    u.*, 
    f.*
FROM usuarios u
INNER JOIN faq f ON u.id = f.usuario_id;