select * from roles.roles

-- 插入数据  insert into form ... values ...
-- insert into roles.roles(tvname,role) values ('请赐我一双翅膀','林九歌')

-- 更新数据  update form set 列 运算符 值 where 列 运算符 值
-- update roles.roles set tvname='如意芳菲' where id=2

-- 删除数据  delete from form where 列 运算符 值
-- delete from roles.roles where id=4

-- where子句 where 列 运算符 值
-- select * from roles.roles where id>2

-- and语句 where 列 运算符 值 and 列 运算符 值 （两个条件同时满足）
-- select * from roles.roles where id!=0 and id!=1

-- or语句 where 列 运算符 值 or 列 运算符 值 （满足其一就行）
-- select * from roles.roles where id=1 or id=2

-- order by 默认升序 order by 列 （desc降序）
-- select * from roles.roles order by status
-- select * from roles.roles order by status desc

-- order by 多重排序 order by 列 ， 列
-- select * from roles.roles order by status desc , tvname asc

-- count（*）函数 select count(*) from form where  列 运算符 值
-- select count(*) from roles.roles where status=0 

-- as为count（*）函数设置别名 select count(*) as 别名 from form
-- select count(*) as total from roles.roles

-- as为列设置别名 select 列 as 别名 from form
-- select tvname as tvName from roles.roles
