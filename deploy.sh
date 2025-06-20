#!/bin/bash

# Portfolio Deployment Script
echo "🚀 Portfolio Deployment Script"
echo "=============================="

# Function to deploy to Netlify
deploy_netlify() {
    echo "📤 Deploying to Netlify..."
    if command -v netlify &> /dev/null; then
        netlify deploy --dir=simple-client --prod
        echo "✅ Deployed to Netlify successfully!"
    else
        echo "❌ Netlify CLI not found. Install with: npm install -g netlify-cli"
    fi
}

# Function to deploy to Vercel
deploy_vercel() {
    echo "📤 Deploying to Vercel..."
    if command -v vercel &> /dev/null; then
        vercel --prod
        echo "✅ Deployed to Vercel successfully!"
    else
        echo "❌ Vercel CLI not found. Install with: npm install -g vercel"
    fi
}

# Function to prepare files for manual upload
prepare_files() {
    echo "📦 Preparing files for manual upload..."
    
    # Create deployment folder
    mkdir -p deployment
    cp -r simple-client/* deployment/
    
    # Update API endpoint for production (optional)
    read -p "Enter your backend API URL (or press Enter to skip): " api_url
    if [ ! -z "$api_url" ]; then
        sed -i.bak "s|http://localhost:5000/api|$api_url/api|g" deployment/index.html
        echo "✅ Updated API endpoint to: $api_url/api"
    fi
    
    echo "✅ Files prepared in 'deployment' folder"
    echo "📁 Upload the contents of 'deployment' folder to your hosting provider"
}

# Function to show help
show_help() {
    echo "Available options:"
    echo "1. Deploy to Netlify"
    echo "2. Deploy to Vercel"
    echo "3. Prepare files for manual upload"
    echo "4. Show deployment guide"
    echo "5. Exit"
}

# Function to open deployment guide
show_guide() {
    if command -v code &> /dev/null; then
        code deployment-guide.md
    elif command -v cat &> /dev/null; then
        cat deployment-guide.md
    else
        echo "📖 Check deployment-guide.md for detailed instructions"
    fi
}

# Main menu
while true; do
    echo ""
    show_help
    echo ""
    read -p "Choose an option (1-5): " choice
    
    case $choice in
        1)
            deploy_netlify
            ;;
        2)
            deploy_vercel
            ;;
        3)
            prepare_files
            ;;
        4)
            show_guide
            ;;
        5)
            echo "👋 Goodbye!"
            exit 0
            ;;
        *)
            echo "❌ Invalid option. Please choose 1-5."
            ;;
    esac
done 