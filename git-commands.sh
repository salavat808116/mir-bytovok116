#!/bin/bash
# Команды для загрузки на GitHub
# Замените YOUR_USERNAME на ваш GitHub username

cd /Users/user/Desktop/mir_bytovok

# Добавьте удаленный репозиторий
git remote add origin https://github.com/YOUR_USERNAME/mir-bytovok.git

# Убедитесь, что ветка называется main
git branch -M main

# Загрузите код на GitHub
git push -u origin main

echo "✅ Готово! Проверьте репозиторий на GitHub"
