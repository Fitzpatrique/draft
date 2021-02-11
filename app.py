from flask import Flask, request, redirect, jsonify, render_template

app = Flask(__name__) 

@app.route('/', methods=['POST','GET'])
@app.route('/index', methods=['POST','GET'])
def index():
    username = 'Patrick'
    return render_template('index.html', user=username)

'''

Sofa Images URL

'''

@app.route('/Ada.jpg')
def ada():
    return app.send_static_file('img/Sofas/Ada.jpg')

@app.route('/Alausa.jpg')
def alausa():
    return app.send_static_file('img/Sofas/Alausa 1.jpg')

@app.route('/Amara.jpg')
def amara():
    return app.send_static_file('img/Sofas/Amara - blue.jpg')

@app.route('/Aramide.jpg')
def aramide():
    return app.send_static_file('img/Sofas/Aramide 1.jpg')

@app.route('/Efe.jpg')
def efe():
    return app.send_static_file('img/Sofas/Efe 1.JPG')

@app.route('/Esosa.jpg')
def esosa():
    return app.send_static_file('img/Sofas/Esosa 1.jpg')

@app.route('/Ezinne.jpg')
def ezinne():
    return app.send_static_file('img/Sofas/Ezinne 1.jpg')

@app.route('/Kesandu.jpg')
def kesandu():
    return app.send_static_file('img/Sofas/Kesandu - blue.jpg')

@app.route('/Kare.jpg')
def kare():
    return app.send_static_file('img/Sofas/Kare 1.jpg')

@app.route('/Longi.jpg')
def longi():
    return app.send_static_file('img/Sofas/Longi 1.jpg')

@app.route('/Nkem.jpg')
def nkem():
    return app.send_static_file('img/Sofas/Nkem - blue.jpg')

@app.route('/Obi.jpg')
def obi():
    return app.send_static_file('img/Sofas/Obi 1.JPG')

@app.route('/Osho.jpg')
def osho():
    return app.send_static_file('img/Sofas/Osho 1.jpeg')

@app.route('/Amakisi.jpg')
def amakisi():
    return app.send_static_file('img/Sofas/Amakisi Duo 1.JPG')

@app.route('/Tunde.jpg')
def tunde():
    return app.send_static_file('img/Sofas/Tunde.JPG')

'''

Coffee Table Images URL

'''

@app.route('/Efe-1.jpg')
def efe1():
    return app.send_static_file('img/Coffee/Efe 1.jpg')

@app.route('/Esosa1.jpg')
def esosa1():
    return app.send_static_file('img/Coffee/Esosa 2.JPG')

@app.route('/Kareem1.jpg')
def kareem1():
    return app.send_static_file('img/Coffee/Kareem 3 - website.jpg')

@app.route('/Mensah-1.jpg')
def mensah1():
    return app.send_static_file('img/Coffee/Mensah.jpg')

'''

Chair Images URL

'''

@app.route('/bimbo.jpg')
def bimbo2():
    return app.send_static_file('img/Chairs/Bimbo 4.jpg')

@app.route('/chimson.jpg')
def chimson2():
    return app.send_static_file('img/Chairs/Chimson 1.jpg')

@app.route('/fela.jpg')
def fela2():
    return app.send_static_file('img/Chairs/Fela 1.jpg')

@app.route('/femi.jpg')
def femi2():
    return app.send_static_file('img/Chairs/Femi - website.jpg')

@app.route('/ikenga.jpg')
def ikenga2():
    return app.send_static_file('img/Chairs/Ikenga.jpg')

@app.route('/shobo.jpg')
def shobo2():
    return app.send_static_file('img/Chairs/Shobo 3.jpg')

@app.route('/taziya.jpg')
def taziya2():
    return app.send_static_file('img/Chairs/Taziya 2.jpg')




'''

Table Images URL

'''

@app.route('/aliko.jpg')
def aliko():
    return app.send_static_file('img/Tables/Aliko table 2.jpg')

@app.route('/amakisi.jpg')
def amakisi3():
    return app.send_static_file('img/Tables/Amakisi table 3 - website.jpg')

@app.route('/andy.jpg')
def andy3():
    return app.send_static_file('img/Tables/Andy - white.jpg')

@app.route('/ath.jpg')
def ath3():
    return app.send_static_file('img/Tables/Ath - white.jpg')

@app.route('/aziza.jpg')
def aziza3():
    return app.send_static_file('img/Tables/Aziza table 1 - website.jpg')

@app.route('/muna.jpg')
def muna3():
    return app.send_static_file('img/Tables/Muna table - black.jpg')

@app.route('/ngozi.jpg')
def ngozi3():
    return app.send_static_file('img/Tables/Ngozi table 1 - website.jpg')

'''

Side Table Images URL

'''

@app.route('/randle.jpg')
def randle():
    return app.send_static_file('img/Side tables/Randle side table 1.jpg')


'''

Console Images URL

'''

@app.route('/Akin5.jpg')
def akin5():
    return app.send_static_file('img/Consoles/Akin tv console 1 - website.jpg')

@app.route('/Esoro5.jpg')
def esoro5():
    return app.send_static_file('img/Consoles/Esoro console 1 - website.jpg')

@app.route('/Kilema5.jpg')
def kilema5():
    return app.send_static_file('img/Consoles/Kilema console 1.jpg')

@app.route('/Longi5.jpg')
def longi5():
    return app.send_static_file('img/Consoles/Longi tv console 1 - website.jpg')

'''

Barstools Images URL

'''

@app.route('/bala.jpg')
def bala():
    return app.send_static_file('img/Barstools/Balarabe 4 - website.jpg')

@app.route('/gamba.jpg')
def gamba():
    return app.send_static_file('img/Barstools/Gamba 2 - website.jpg')

@app.route('/izu.jpg')
def izu():
    return app.send_static_file('img/Barstools/Izu 5 - website.jpg')

@app.route('/kubrah.jpg')
def kubrah():
    return app.send_static_file('img/Barstools/Kubrah 1 - website.jpg')

@app.route('/mast.jpg')
def mast():
    return app.send_static_file('img/Barstools/Mast 2 - website.jpg')

@app.route('/sule.jpg')
def sule():
    return app.send_static_file('img/Barstools/Sule 1.jpeg')

@app.route('/zigi.jpg')
def zigi():
    return app.send_static_file('img/Barstools/Zigi 3.jpg')




@app.route('/index.css')
def main1():
    return app.send_static_file('styles/index.css')

@app.route('/index.js')
def main2():
    return app.send_static_file('javascript/index.js')

@app.route('/offline')
def offline():
    return app.send_static_file('offline.html')

@app.route('/asset-manifest.json')
def manifest():
    return app.send_static_file('manifest.json')


if __name__ == "__main__":
    app.run(debug=True)