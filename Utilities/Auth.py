import json


def GetDiscordBotCredentials():
	CredentialsFile = open("Secret/DiscordBot.json", "r")
	CredentialsJSON = json.load(CredentialsFile)
	CredentialsFile.close()
	return CredentialsJSON