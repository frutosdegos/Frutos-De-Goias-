@echo off
chcp 65001 >nul
echo =======================================================
echo    🍃 FRUTOS DE GOIÁS - DEPLOY AUTOMÁTICO NO GITHUB
echo =======================================================
echo.

where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [AVISO] O Git não está instalado ou não foi encontrado no PATH do seu Windows!
    echo.
    echo Para instalar o Git:
    echo 1. Baixe e instale pelo link oficial: https://git-scm.com/download/win
    echo 2. Após instalar, execute este arquivo novamente.
    echo.
    pause
    exit /b 1
)

if not exist ".git" (
    echo [1/3] Inicializando repositório Git local...
    git init
    git branch -M main
    echo.
    set /p REPO_URL="Digite a URL do seu repositório no GitHub (ex: https://github.com/seu-usuario/seu-repo.git): "
    if not "%REPO_URL%"=="" (
        git remote add origin %REPO_URL%
    ) else (
        echo [AVISO] Nenhuma URL informada. Configure com: git remote add origin URL_DO_REPO
    )
)

echo [2/3] Adicionando arquivos e criando commit...
git add .
git commit -m "Atualização automática do site Frutos de Goiás"

echo.
echo [3/3] Enviando alterações para o GitHub (Push)...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo =======================================================
    echo   ✅ Sucesso! Suas alterações foram enviadas ao GitHub.
    echo   O deploy no GitHub Pages será concluído em instantes!
    echo =======================================================
) else (
    echo.
    echo [AVISO] Houve um problema ao enviar. Verifique se você está logado no Git/GitHub.
)

echo.
pause
