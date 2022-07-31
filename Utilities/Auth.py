import json


# Returneaza Token ul si ClientID ul botului din folderul Secret (nepublicat pe Git)
def GetDiscordBotCredentials():
	CredentialsFile = open("Secret/DiscordBot.json", "r")
	CredentialsJSON = json.load(CredentialsFile)
	CredentialsFile.close()
	return CredentialsJSON