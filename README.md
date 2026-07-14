<div align="center">

# 🐍 Snake Game WAR

### ⚡ Java • Maven • WAR • HTML5 Canvas • CSS3 • JavaScript • Tomcat ⚡

<p align="center">

<img src="https://img.shields.io/badge/Java-17+-00FF99?style=for-the-badge&logo=openjdk&logoColor=black"/>
<img src="https://img.shields.io/badge/Maven-3.8+-00FFFF?style=for-the-badge&logo=apachemaven&logoColor=black"/>
<img src="https://img.shields.io/badge/Tomcat-10-FFD700?style=for-the-badge&logo=apachetomcat&logoColor=black"/>
<img src="https://img.shields.io/badge/Packaging-WAR-FF0080?style=for-the-badge"/>
<img src="https://img.shields.io/badge/License-MIT-7CFC00?style=for-the-badge"/>

</p>

---

### 🚀 A browser-based Snake Game packaged as a Maven WAR project and deployed on Apache Tomcat.

</div>

---

# ✨ Features

- 🐍 Classic Snake Gameplay
- 🍎 Random Food Generation
- 🎮 Arrow Key Controls
- 📈 Live Score Counter
- 💀 Game Over Detection
- 🔄 Restart Button
- ⚡ Lightweight
- 🌐 Browser Based
- 📦 Maven WAR Packaging
- 🚀 Tomcat Deployment Ready

---

# 🏗️ Tech Stack

| Technology | Usage |
|------------|-------|
| Java | Maven Project |
| HTML5 | UI |
| CSS3 | Styling |
| JavaScript | Game Logic |
| Maven | Build Tool |
| Apache Tomcat | Deployment |
| WAR | Packaging |

---

# 📂 Project Structure

```text
SnakeGameWAR
│
├── pom.xml
│
├── src
│   └── main
│       └── webapp
│           ├── index.html
│           ├── style.css
│           ├── game.js
│           └── WEB-INF
│               └── web.xml
│
└── target
    └── SnakeGameWAR-1.0-SNAPSHOT.war
```

---

# ⚙️ Build Project

```bash
mvn clean
mvn compile
mvn test
mvn package
```

Generate WAR

```bash
mvn clean package
```

---

# 🚀 Deploy to Tomcat

Copy WAR

```bash
cp target/SnakeGameWAR-1.0-SNAPSHOT.war <TOMCAT_HOME>/webapps/
```

Start Tomcat

```bash
startup.sh
```

or

```bash
systemctl start tomcat10
```

---

# 🌍 Run Application

```
http://localhost:9090/SnakeGameWAR-1.0-SNAPSHOT/
```

*(Replace `9090` with your configured Tomcat port.)*

---

# 🎮 Controls

| Key | Action |
|------|--------|
| ⬆️ | Move Up |
| ⬇️ | Move Down |
| ⬅️ | Move Left |
| ➡️ | Move Right |

---

# 📸 Gameplay

```
+---------------------------+
|                           |
|        🟩🟩🟩              |
|             🍎            |
|                           |
|                           |
+---------------------------+

Score : 5
```

---

# 🛠️ Maven Lifecycle Used

```text
validate
compile
test
package
verify
install
deploy
site
```

Useful Commands

```bash
mvn validate
mvn compile
mvn test
mvn package
mvn verify
mvn install
mvn deploy
mvn site
```

---

# 📦 Build Output

```
target/

SnakeGameWAR-1.0-SNAPSHOT.war
```

---

# 🚀 Future Enhancements

- 🔊 Sound Effects
- 🎵 Background Music
- 🌙 Dark / Light Theme
- 🏆 High Score Storage
- 📱 Mobile Controls
- 🌍 Multiplayer
- 🎨 Multiple Themes
- ⚡ Power Ups

---

# 👨‍💻 Author

**Abhishek K**

DevOps • Cloud • Java • Maven • Docker • Linux • AWS

---

<div align="center">

## ⭐ If you like this project, give it a Star ⭐

Made with ❤️ using Java, Maven & Tomcat

</div>
