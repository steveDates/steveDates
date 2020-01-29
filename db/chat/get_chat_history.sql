select users_messages_id, users_message, sender from messages
where chat_id = $1