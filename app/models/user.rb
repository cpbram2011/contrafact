# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}
    before_validation :ensure_session_token

    attr_reader :password

    def self.find_by_credentials(username, pass)
        user = User.find_by(username: username)
        return user if user && user.is_password?(pass)
    end
    
    def self.find_username(username)
        user = User.find_by(username: username)
        return user if user 
    end

    def password=(pass)
        @password = pass
        self.password_digest = BCrypt::Password.create(pass)
    end

    def is_password?(guess)
        password = BCrypt::Password.new(self.password_digest)
        password.is_password?(guess)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        return self.session_token
    end

end
