# 用flask搭建web服务
## 基本用法
新建文件`flask_basic.py`，内容如下：
```python
# code
from flask import Flask
app = Flask(__name__)


@app.route("/")
def hello():
    return "hello world"


if __name__ == '__main__':
    app.run(debug=True)
```

在本地启动该web服务：
```bash
# bash
>>> python flask_basic.py

 * Serving Flask app "flask_basic" (lazy loading)
 * Environment: production
   WARNING: Do not use the development server in a production environment.
   Use a production WSGI server instead.
 * Debug mode: on
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 561-661-908
```
查看网页返回的内容：
```bash
>>> curl http://127.0.0.1:5000/
hello world
```
查看网页返回的详细内容，看到返回的类型为html：
```bash
>>> curl -v http://127.0.0.1:5000/

*   Trying 127.0.0.1...
* TCP_NODELAY set
* Connected to 127.0.0.1 (127.0.0.1) port 5000 (#0)
> GET / HTTP/1.1
> Host: 127.0.0.1:5000
> User-Agent: curl/7.60.0
> Accept: */*
> 
* HTTP 1.0, assume close after body
< HTTP/1.0 200 OK
< Content-Type: text/html; charset=utf-8
< Content-Length: 11
< Server: Werkzeug/0.14.1 Python/3.6.8
< Date: Tue, 26 Mar 2019 10:00:41 GMT
< 
* Closing connection 0
```


将文件`flask_basic.py`改为内容如下：
```python
from flask import Flask, jsonify
app = Flask(__name__)


@app.route("/")
def hello():
    # return "hello world"
    return jsonify({"about": "hello world"})


if __name__ == '__main__':
    app.run(debug=True)
```
再查看返回内容，发现格式为json：
```bash
>>> curl -v http://127.0.0.1:5000/

*   Trying 127.0.0.1...
* TCP_NODELAY set
* Connected to 127.0.0.1 (127.0.0.1) port 5000 (#0)
> GET / HTTP/1.1
> Host: 127.0.0.1:5000
> User-Agent: curl/7.60.0
> Accept: */*
> 
* HTTP 1.0, assume close after body
< HTTP/1.0 200 OK
< Content-Type: application/json
< Content-Length: 29
< Server: Werkzeug/0.14.1 Python/3.6.8
< Date: Tue, 26 Mar 2019 10:13:44 GMT
< 
{
  "about": "hello world"
}
* Closing connection 0
```

> get请求和post请求的区别：
> 1. 在HTTP/1.1中：GET 通常用于请求服务器发送某个资源，POST 通常用于向服务器输入数据；GET和HEAD请求是强制服务器实现的，其他请求可选。
> 2. 浏览器对 URL 的长度有限制，所以GET只能发送有限数据；POST没有限制。

