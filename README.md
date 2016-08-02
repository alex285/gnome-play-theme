This is  an example GTK theme, aims to be properly written and easily to expand for creating your own themes. It is based and supports the current development [GTK+ version 3.22](https://git.gnome.org/browse/gtk+/tree/gtk/theme/Adwaita), but it should work at least on 3.20

## To install

You need Node 6.0, and you can get it from [NVM](https://github.com/creationix/nvm)

**1. Clone the repo**
```
git clone https://github.com/alex285/gnome-play-theme
```

**2. Install dependencies**

```
cd gnome-play-theme
npm install
```

**3. Build it**
```
gulp
```

That will create a CSS file
```
gnome-play-theme/dist/public/gtk/play-dark/gtk.css
```

**4. Install it**

Create a new GTK3 theme folder

```
sudo mkdir -p /usr/share/themes/Play/gtk-3.0
```

Copy Adwaita (or any other) GTK2 theme

```
sudo cp -R /usr/share/themes/Adwaita/{gtk-2.0,index.theme} /usr/share/themes/Play/

```

Copy the gtk.css file you built before

```
sudo cp -R dist/public/gtk/play-dark/gtk.css /usr/share/themes/Play/gtk-3.0/
```

**DONE!**

Select the theme (Play) with GNOME Tweak Tool

## Info
When you test themes, test them with GTK Inspector. So basically do not pick this theme from Tweak Tool, because it is totally unusable, and you may not even be able revert :p
