# coding=utf-8
import web
render = web.template.render('templates/')
urls = (
r'/', 'index',
r'/add', 'add',
r'/home','home',
r'/reg','reg',
r'/reg_page.html','reg_page',
r'/write','writemail',
)
db = web.database(dbn='postgres', user='postgres', pw='anna', db='postgres')
class index:
    def GET(self):
        todos = db.select('todo')
        return render.showdb(todos)
class add:
    def POST(self):
        i = web.input()
        n = db.insert('todo', title=i.title)
        raise web.seeother('/')
class home:
    def GET(self):
        print 'as'
        return render.index()
class reg:
    def GET(self):
        return render.reg()
class reg_page:
    def GET(self):
        return render.reg_page()
    def POST(self):
        data = web.data()
        i = web.input()
        print data
        print i

        return render.reg()
if __name__ == "__main__":
    app = web.application(urls, globals())
    app.run()