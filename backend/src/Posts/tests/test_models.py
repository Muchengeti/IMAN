from django.test import TestCase
from Posts.models import Article, Event

class ArticleTest(TestCase):

    def CreateArticle(self, title, author, created_at):
        return Article.objects.create(title = title, author = author, created_at = created_at)

    def TestCreateArticle(self):
        article = self.CreateArticle("Test Title", "Test Author")
        self.assertTrue(isinstance(article, Article))
        self.assertEqual(article.title, "Test Title")
        self.assertEqual(article.author, "Test Author")
        print("test was run")
