@users.each do |user|
    json.set! user.id do
        
        json.extract! user, :username, :email, :id
        
    end
end