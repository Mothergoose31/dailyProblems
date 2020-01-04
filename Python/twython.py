from twython import twython


twitter = twython(KEY, SECRET)

for status in twitter.search(q='data science')['statuses']:
    user = status['user']['screen_name'].encode('uft-8')
    print user , ":",text
    print