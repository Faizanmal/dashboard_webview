#!/usr/bin/env python3
"""
Quick setup script for Django + DRF backend
Run this script to automatically set up your backend
"""

import os
import subprocess
import sys
from pathlib import Path

def run_command(command, cwd=None):
    """Run a command and return the result"""
    try:
        result = subprocess.run(
            command, 
            shell=True, 
            check=True, 
            capture_output=True, 
            text=True,
            cwd=cwd
        )
        return result.stdout
    except subprocess.CalledProcessError as e:
        print(f"Error running command: {command}")
        print(f"Error: {e.stderr}")
        return None

def create_directory_structure():
    """Create the backend directory structure"""
    print("📁 Creating backend directory structure...")
    
    # Create backend directory
    backend_dir = Path("dashboard_backend")
    backend_dir.mkdir(exist_ok=True)
    
    # Create apps directories
    apps = ["analytics", "campaigns", "users"]
    for app in apps:
        app_dir = backend_dir / app
        app_dir.mkdir(exist_ok=True)
        
        # Create __init__.py files
        (app_dir / "__init__.py").touch()
        
        # Create management commands directory for analytics
        if app == "analytics":
            management_dir = app_dir / "management"
            management_dir.mkdir(exist_ok=True)
            (management_dir / "__init__.py").touch()
            
            commands_dir = management_dir / "commands"
            commands_dir.mkdir(exist_ok=True)
            (commands_dir / "__init__.py").touch()

def create_env_file():
    """Create .env file"""
    print("🔧 Creating .env file...")
    
    env_content = """SECRET_KEY=django-insecure-your-secret-key-change-this-in-production
DEBUG=True
DATABASE_URL=sqlite:///db.sqlite3
"""
    
    with open("dashboard_backend/.env", "w") as f:
        f.write(env_content)

def main():
    print("🚀 Setting up Django + DRF Backend for Dashboard")
    print("=" * 60)
    
    # Check if Python is available
    if not run_command("python --version"):
        print("❌ Python is not available. Please install Python 3.8+")
        sys.exit(1)
    
    # Create virtual environment
    print("🐍 Creating virtual environment...")
    if not run_command("python -m venv venv"):
        print("❌ Failed to create virtual environment")
        sys.exit(1)
    
    # Activate virtual environment and install requirements
    print("📦 Installing dependencies...")
    
    # On Windows
    if os.name == 'nt':
        activate_cmd = "venv\\Scripts\\activate"
        pip_cmd = "venv\\Scripts\\pip"
    else:
        activate_cmd = "source venv/bin/activate"
        pip_cmd = "venv/bin/pip"
    
    # Install requirements
    if not run_command(f"{pip_cmd} install -r backend_requirements.txt"):
        print("❌ Failed to install requirements")
        sys.exit(1)
    
    # Create Django project
    print("🏗️ Creating Django project...")
    if not run_command(f"{pip_cmd} install django djangorestframework django-cors-headers"):
        print("❌ Failed to install Django")
        sys.exit(1)
    
    if not run_command("django-admin startproject dashboard_backend"):
        print("❌ Failed to create Django project")
        sys.exit(1)
    
    # Create apps
    print("📱 Creating Django apps...")
    os.chdir("dashboard_backend")
    
    apps = ["analytics", "campaigns", "users"]
    for app in apps:
        if not run_command("python manage.py startapp " + app):
            print(f"❌ Failed to create {app} app")
            sys.exit(1)
    
    # Create .env file
    create_env_file()
    
    print("✅ Backend setup completed!")
    print("\n📋 Next steps:")
    print("1. cd dashboard_backend")
    print("2. Copy the settings.py, models.py, views.py, and other files from backend_setup.md")
    print("3. python manage.py makemigrations")
    print("4. python manage.py migrate")
    print("5. python manage.py createsuperuser")
    print("6. python manage.py runserver 8000")
    print("\n🔗 Your API will be available at: http://localhost:8000/api/v1/")

if __name__ == "__main__":
    main() 