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
r'/mainshow.html','mainshow',
)
db = web.database(dbn='postgres', user='postgres', pw='anna', db='postgres')
class index:
    def GET(self):
        todos = db.select('todo')
        print type(todos)

        return render.showdb(todos)
class add:
    def POST(self):
        i = web.input()
        n = db.insert('todo', title=i.title)
        raise web.seeother('/')
class home:
    def GET(self):
        return render.main()
    def POST(self):
        print 'muma'
        i = web.input()
        n=db.insert('user_content', name='anna',content=i.content)
        raise web.seeother('#')
class reg:
    def GET(self):

        return render.reg()
class reg_page:
    def GET(self):
        useinfo=db.select('reg_user')

        return render.reg_page(useinfo)
    def POST(self):
        print 'aaa'
        data = web.data()
        i = web.input()
        user = db.select("reg_user")

        t=i.username in user[0].name
        if t:
            print '注册了'
        else:
            n = db.insert('reg_user', name=i.username,access=i.access)


        raise web.seeother('reg_page.html')
class mainshow:
    def GET(self):
        todos=db.select('user_content')

        return render.mainshow(todos)
if __name__ == "__main__":
    app = web.application(urls, globals())
    app.run()